gn init x:etc
 let blacklist arr

 push blacklist "backup"
 push blacklist "beep"
 push blacklist "detach"
 push blacklist "download"
 push blacklist "find"
 push blacklist "install"
 push blacklist "kill"
 push blacklist "make"
 push blacklist "mount"
 push blacklist "merge-file"
 push blacklist "review"
 push blacklist "salt"
 push blacklist "server-jneeg"
 push blacklist "server-merlin"
 push blacklist "ssh-merlin"
 push blacklist "system"
 push blacklist "test-all"
 push blacklist "test-check"
 push blacklist "test-compile"
 push blacklist "test-dump"
 push blacklist "test-inline"
 push blacklist "test-install"
 push blacklist "test-let"
 push blacklist "test-mail"
 push blacklist "test-mail-report"
 push blacklist "test-os-execute"
 push blacklist "test-os-shell"
 push blacklist "test-parse"
 push blacklist "test-read"
 push blacklist "test-sleep"
 push blacklist "test-stop"
 push blacklist "test-syntax"
 push blacklist "test-system"
 push blacklist "test-translate"
 push blacklist "unmount"
 push blacklist "upgrade"
 push blacklist "upload"
 push blacklist "user-create"
 push blacklist "user-init"
 push blacklist "user-install"
 push blacklist "user-remove"

 let apps app_list
 let commands arr

 forin apps
  if contain blacklist k
   cont

  //let command arr "./make" "make" k "--color"
  let command arr "./make" k "--color"

  push commands command
 end

 run os_batch commands

 let count commands.length
 let o obj count
 let s obj_option o

 log "app" s
end
