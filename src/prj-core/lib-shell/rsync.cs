gn rsync token:str args:etc
 let a arr
 let argv ssh_argv
 
 unshift argv "-4"
 unshift argv "ssh"
 
 let rsh join argv " "
 let rsh concat "--rsh=" rsh

 push a "rsync"
 push a rsh
 push a "--recursive"
 push a "--perms"
 push a "--delete"
 push a "--compress-level=9"
 append a args

 ret run ssh_pass token a:etc
end
