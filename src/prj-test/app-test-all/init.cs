gn init x:etc
 //get apps

 fn get_apps
  let r arr
  let blacklist
   "agglomerate"
   "backup"
   "beep"
   "chrome"
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
   "test-catch"
   "test-check"
   "test-compile"
   "test-dump"
   "test-else"
   "test-elseif"
   "test-execute"
   "test-inline"
   "test-install"
   "test-let"
   "test-mail"
   "test-mail-report"
   "test-os-execute"
   "test-os-shell"
   "test-parse"
   "test-read-error"
   "test-sleep"
   "test-stop"
   "test-syntax"
   "test-system"
   "test-timer"
   "test-translate"
   "test-warning"
   "unmount"
   "upgrade"
   "upload"
   "user-create"
   "user-init"
   "user-install"
   "user-remove"
  end

  forin app_list
   if contain blacklist k
    cont

   push r k
  end

  ret r
 end

 //main

 let apps get_apps
 let t to_tbl apps

 tbl_index t

 let t tbl_render t

 log t

 let commands arr

 for apps
  //let command arr "./make" "make" v
  let command arr "./make" v

  push commands command
 end

 run os_batch commands

 let count commands.length
 let o obj count
 let s obj_option o

 log "app" s
end
