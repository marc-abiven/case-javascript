gn init x:etc
 let blacklist
  "backup"
  "beep"
  "detach"
  "download"
  "find"
  "install"
  "kill"
  "make"
  "mount"
  "merge-file"
  "review"
  "salt"
  "server-jneeg"
  "server-merlin"
  "ssh-merlin"
  "system"
  "test-all"
  "test-check"
  "test-compile"
  "test-dump"
  "test-execute"
  "test-inline"
  "test-install"
  "test-let"
  "test-mail"
  "test-mail-report"
  "test-os-execute"
  "test-os-shell"
  "test-parse"
  "test-read"
  "test-sleep"
  "test-stop"
  "test-syntax"
  "test-system"
  "test-timer"
  "test-translate"
  "unmount"
  "upgrade"
  "upload"
  "user-create"
  "user-init"
  "user-install"
  "user-remove"
 end

 let apps app_list
 let commands arr

 forin apps
  if contain blacklist k
   cont

  //let command arr "./make" "make" k
  let command arr "./make" k

  push commands command
 end

 run os_batch commands

 let count commands.length
 let o obj count
 let s obj_option o

 log "app" s
end
