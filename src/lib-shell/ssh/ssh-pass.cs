gn ssh_pass x:etc
 let args dup x
 let first shift args

 if is_str first
  ret run ssh_pass os_execute x:etc

 let arguments arr "sshpass" "-p" args:etc

 if is_fn first
  ret first arguments:etc
 elseif is_gn first
  ret run first arguments:etc
 else
  stop
end