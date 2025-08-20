fn git_execute x y:etc
 let dir dir_current

 dir_change x

 let r os_execute "git" y:etc

 dir_change dir

 ret r
end