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
 
 for app_list
  if contain blacklist v
   cont

  run os_prompt "./make" "make" v "--color"
 end
end
