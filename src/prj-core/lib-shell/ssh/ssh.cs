gn ssh token:str args:etc
 let a arr
 let argv ssh_argv

 push a "ssh"
 append a argv
 append a args

 ret run ssh_pass token a:etc
end
