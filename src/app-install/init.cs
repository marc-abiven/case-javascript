gn init x:etc
 let args dup x
 let remote extract args "--remote"

 fn get_apps
  let r arr
  let apps app_list

  forof apps
   let flag concat "--" v

   if extract args flag
    push r v
  end

  if is_full r
   ret r

  if is_remote
   let whitelist "detach find install jneeg-server kill make nop open-port password ps server"
   let whitelist split whitelist " "

   ret whitelist
  end

  ret apps
 end

 fn get_cmds
  let r arr

  forof app_list
   let cmd concat "cmd-" v

   push r cmd
  end

  ret r
 end
 
 fn is_daemon x
  if not is_str x
   ret false
   
  let list "server"
  let list split list " "

  ret contain list x
 end

 let apps get_apps

 extract apps "test-parse"
 extract apps "test-syntax"

 if is_full args
  dump args
  ret
 end

 forof apps
  flower v

  let status os_system "./make" v "--compile" "--quiet"

  if different status 0
   log "make" v "failed"
   dump status
   ret
  end
 end

 let target split process.env.PATH ":"
 let target back target
 let cmds get_cmds

 forof dir_read target
  let base path_base v

  if not match base "cmd-*"
   cont

  if contain cmds base
   cont

  let s to_lit v

  log "remove" s
  fs_remove v
 end

 forof apps
  let file concat "out-" v ".js"
  let out dir_current
  let out path_concat out file

  check is_file out

  let content arr

  push content "#!/bin/bash"

  let s space binary "--trace-uncaught"  "--trace-deprecation" out "$@"

  push content s

  let content join content
  let base concat "cmd-" v
  let cmd path_concat target base
  
  sudo_save cmd content
  
  os_system "chmod" "+x" cmd
 end
  
 forof apps
  if not is_daemon v
   cont

  run service_uninstall v
  run service_install v target
  
  log "service" v
 end
  
 if remote
  ret

 let flags arr

 forof apps
  let flag concat "--" v

  push flags flag
 end

 flower "remote"
 os_system "cmd-upload" "--vps" "--quiet"

 let token app_token "vps"

 run ssh_pass os_prompt token "ssh" login_vps "cd" "case-javascript" "&&" "./make" "install" "--remote" "--quiet" flags:etc
end
