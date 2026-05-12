gn init x:etc
 let blacklist arr

 push blacklist "backup"
 push blacklist "install"
 push blacklist "mount"
 push blacklist "merge-file"
 push blacklist "review"
 push blacklist "ssh-merlin"
 push blacklist "test-all"
 push blacklist "unmount"
 push blacklist "upload"

 forin app_list
  if contain blacklist k
   cont

  let command to_lit k

  log "make" command

  let status run os_prompt "./make" "make" k "--color"

  if different status 0
   ret
 end
end