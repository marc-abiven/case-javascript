gn init x:etc
 fn get_url
  let s os_execute "elinks" "-dump" "https://nodejs.org/dist/latest"

  forof split s
   let s trim v
   let s replace_rec s "  " " "
   let a split s " "

   if not is_many a
    cont

   let r at a 1

   if not is_url r
    cont

   if match r "https://nodejs.org/dist/latest/node-v*-linux-x64.tar.gz"
    ret r
  end

  stop
 end

 fn get_directory x
  check is_str x

  let o new URL x
  let path o.pathname
  let base path_base path
  let tmp path_concat "tmp" base

  os_system "wget" "--quiet" "--output-document" tmp x

  let option_file concat "--file=" tmp
  let option_directory "--directory=tmp"

  os_system "tar" "--extract" "--gzip" option_file option_directory

  let a split base "."

  drop a 2

  let s join a "."

  ret path_concat "tmp" s
 end

 let version_initial os_execute "node" "--version"
 let version_initial to_lit version_initial

 log "version-initial" version_initial

 let url get_url
 let directory get_directory url
 let local_bin path_concat directory "bin/node"
 let bin "/usr/bin/node"

 os_system "sudo" "rm" "--force" bin
 os_system "sudo" "cp" local_bin bin

 let version_local os_execute "node" "--version"
 let version_local to_lit version_local

 log "version-local" version_local

 let token app_token "vps"
 let tmp "case-javascript/tmp"
 let target_tmp concat login_vps ":" tmp
 let remote_bin "case-javascript/tmp/node"

 run ssh_system token "ssh" login_vps "rm" "--force" "--recursive" tmp
 run ssh_system token "ssh" login_vps "rm" "--force" remote_bin
 run ssh_system token "ssh" login_vps "mkdir" tmp
 run ssh_system token "rsync" "--perms" "--compress-level=9" bin target_tmp
 run ssh_system token "ssh" login_vps "sudo" "rm" "--force" bin
 run ssh_system token "ssh" login_vps "sudo" "cp" "--force" remote_bin bin
 run ssh_system token "ssh" login_vps "rm" "--force" remote_bin

 let version_remote run ssh_execute token "ssh" login_vps "node" "--version"
 let version_remote to_lit version_remote

 log "version-remote" version_remote

 //open port

 os_system "cmd-open-port"
 run ssh_system token "ssh" login_vps "cmd-open-port"
end
