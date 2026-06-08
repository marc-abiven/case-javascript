gn init x:etc
 //cleanup path

 let args dup x
 let local extract args "--local"
 let remote extract args "--remote"

 fn cleanup_path target:str
  let cmds get_cmds
  let paths split process.env.PATH ":"
  let paths dedup paths

  for paths
   let dir v

   if is_symbolic_link dir
    cont

   for dir_read dir
    let base path_base v

    if not match base "cmd-*"
     cont

    if same dir target
     if contain cmds base
      cont
    end

    let s to_lit v

    log "remove" s
    sudo_fs_remove v
   end
  end
 end

 //get apps

 fn get_apps
  let r arr
  let apps app_list
  let apps obj_keys apps

  for apps
   let flag concat "--" v

   if extract args flag
    push r v
  end

  if is_full r
   ret r

  if is_remote
   let blacklist arr

   push blacklist "mount"
   push blacklist "review"
   push blacklist "upload"
   push blacklist "unmount"
   push blacklist "merge-file"
   push blacklist "ssh-merlin"
   push blacklist "download"
   push blacklist "apache-start"
   push blacklist "server-jneeg"

   for apps
    if contain blacklist v
     cont

    push r v
   end

   ret r
  end

  ret apps
 end

 //get cmds

 fn get_cmds
  let r arr

  forin app_list
   let cmd concat "cmd-" k

   push r cmd
  end

  ret r
 end

 //is daemon

 fn is_daemon x
  if not is_str x
   ret false

  let list arr

  push list "server-merlin"

  ret contain list x
 end

 //main

 let apps get_apps

 //apps returning non-zero

 extract apps "test-let"
 extract apps "test-parse"
 extract apps "test-syntax"
 extract apps "test-translate"

 if is_full args
  dump args
  ret
 end

 //compile in parallel

 let commands arr

 for apps
  //let command arr "./make" "make" v "--compile"
  let command arr "./make" v "--compile"

  push commands command
 end

 run os_batch commands

 //clean

 let target "/usr/bin"

 cleanup_path target

 let paths split process.env.PATH ":"

 check contain paths target

 //create commands

 for apps
  let file concat "out-" v ".js"
  let out dir_current
  let out path_concat out file

  check is_file out

  let content arr

  push content "#!/bin/bash"

  let argv node_argv
  let s space argv:etc out "$@"

  push content s
  push content ""

  let content join content
  let base concat "cmd-" v
  let cmd path_concat target base

  sudo_file_save cmd content
  sudo_fs_change_mode cmd "a+x"
 end

 //install service

 for apps
  if not is_daemon v
   cont

  log "service" v

  service_uninstall v
  service_install v target
 end

 //upload

 if local
  ret

 if remote
  ret

 let flags arr

 for apps
  let flag concat "--" v

  push flags flag
 end

 flower "remote"
 os_system "cmd-upload" "--merlin" "--quiet"

 let token app_token "merlin"

 run ssh token login_merlin "cd" "case-javascript" "&&" "./make" "install" "--remote" "--quiet" flags:etc
end
