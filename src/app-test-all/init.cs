gn init x:etc
 let excludes arr
 
 push excludes "backup"
 push excludes "install"
 push excludes "mount"
 push excludes "merge-file"
 push excludes "review"
 push excludes "ssh-merlin"
 push excludes "test-all"
 push excludes "unmount"
 push excludes "upload"
 
 for app_list
  if contain excludes v
   cont

  run os_prompt "./make" "make" v "--color"
 end
end
