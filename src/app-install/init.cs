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

  for apps
   let flag concat "--" v

   if extract args flag
    push r v
  end

  if is_full r
   ret r

  if is_remote
   let whitelist arr

   push whitelist "beautify"
   push whitelist "detach"
   push whitelist "find"
   push whitelist "group-list"
   push whitelist "install"
   push whitelist "kill"
   push whitelist "make"
   push whitelist "nop"
   push whitelist "open-port"
   push whitelist "password"
   push whitelist "ps"
   push whitelist "server-jneeg"
   push whitelist "server-merlin"
   push whitelist "system"
   push whitelist "test"
   push whitelist "test-all"
   push whitelist "test-dump"
   push whitelist "test-for"
   push whitelist "test-mail"
   push whitelist "test-sleep"
   push whitelist "test-stderr"
   push whitelist "test-stop"
   push whitelist "test-tmp"
   push whitelist "user-create"
   push whitelist "user-init"
   push whitelist "user-install"
   push whitelist "user-list"
   push whitelist "user-remove"

   ret whitelist
  end

  ret apps
 end

 //get cmds

 fn get_cmds
  let r arr

  for app_list
   let cmd concat "cmd-" v

   push r cmd
  end

  ret r
 end

 //is daemon

 fn is_daemon x
  if not is_str x
   ret false

  let list "server-merlin"
  let list split list " "

  ret contain list x
 end

 //main

 let apps get_apps

 extract apps "test-parse"
 extract apps "test-syntax"
 extract apps "test-translate"

 if is_full args
  dump args
  ret
 end

 //compile

 for apps
  flower v

  let status os_system "./make" v "--compile" "--quiet"

  if different status 0
   log "make" v "failed"
   dump status

   ret
  end
 end

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

  run service_uninstall v
  run service_install v target

  log "service" v
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

 run ssh_pass os_prompt token "ssh" login_merlin "cd" "case-javascript" "&&" "./make" "install" "--remote" "--quiet" flags:etc
end
