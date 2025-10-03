gn init x:etc
 //get url

 fn get_url
  let s os_execute "elinks" "-dump" "https://nodejs.org/dist/latest"
  let a split s

  for a
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

 //get directory

 fn get_directory x:str
  let url url_parse x
  let base path_base url.path
  let tmp path_tmp base
  let dir path_dir tmp

  os_system "wget" "--quiet" "--output-document" tmp x

  let option_file concat "--file=" tmp
  let option_directory concat "--directory=" dir

  os_system "tar" "--extract" "--gzip" option_file option_directory

  let a split base "."

  drop a 2

  let s join a "."

  fs_remove tmp

  ret path_concat dir s
 end

 //main

 let version_initial os_execute "node" "--version"
 let version_initial to_lit version_initial

 log "version-initial" version_initial

 let url get_url
 let directory get_directory url

 let local_bin path_concat directory "bin/node"
 let bin "/usr/bin/node"

 sudo "rm" "--force" bin
 sudo "cp" local_bin bin

 let version_local os_execute "node" "--version"
 let version_local to_lit version_local

 log "version-local" version_local
 
 //remote
 
 if is_local
  let token app_token "merlin"
  let tmp "case-javascript/tmp"
  let target_tmp concat login_merlin ":" tmp
  let remote_bin "case-javascript/tmp/node"

  run ssh_system token "ssh" login_merlin "rm" "--force" "--recursive" tmp
  run ssh_system token "ssh" login_merlin "rm" "--force" remote_bin
  run ssh_system token "ssh" login_merlin "mkdir" tmp
  run ssh_system token "rsync" "--perms" "--compress-level=9" bin target_tmp
  run ssh_system token "ssh" login_merlin "sudo" "rm" "--force" bin
  run ssh_system token "ssh" login_merlin "sudo" "cp" "--force" remote_bin bin
  run ssh_system token "ssh" login_merlin "rm" "--force" remote_bin

  let version_remote run ssh_execute token "ssh" login_merlin "node" "--version"
  let version_remote to_lit version_remote

  log "version-remote" version_remote

  run ssh_system token "ssh" login_merlin "cmd-open-port"
 end

 fs_remove directory

 //open port

 os_system "cmd-open-port"
end
