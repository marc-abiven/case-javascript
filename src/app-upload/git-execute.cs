gn git_execute x y:etc
 let dir dir_current

 dir_change x

 //log y:etc
 let r os_execute "git" y:etc
 //run os_prompt "git" y:etc

 dir_change dir

// ret r
end
