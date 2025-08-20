gn init x:etc
 let parameters dup x
 let remote extract parameters "--remote"

 if is_full parameters
  dump parameters
  ret
 end

 let apps app_list

 extract apps "test-parse"
 extract apps "test-syntax"

 forof apps
  flower v

  let status os_system "./make" v "--compile"

  if different status 0
   log "make" v "failed"
   dump status
   ret
  end
 end

 let target split process.env.PATH ":"
 let target back target

 forof dir_read target
  let base path_base v

  if not match base "cmd-*"
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

  let a arr

  push a "#!/bin/bash"

  let s space "node" "--trace-uncaught" out "$@"

  push a s

  let content join a
  let cmd concat "cmd-" v
  let cmd path_concat target cmd

  file_save cmd content
  os_system "chmod" "+x" cmd
 end

 if remote
  ret

 flower "remote"
 os_system "cmd-upload" "--vps"

 let token app_token "vps"

 run ssh_pass os_prompt token "ssh" login_vps "sudo" "cmd-install" "--remote"
end
