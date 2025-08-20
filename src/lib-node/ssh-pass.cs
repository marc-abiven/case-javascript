gn ssh_pass x:etc
 let parameters dup x
 let first shift parameters

 if is_str first
  ret run ssh_pass os_execute x:etc

 let arguments arr "sshpass" "-p" parameters:etc

 if is_fn first
  ret first arguments:etc
 elseif is_gn first
  ret run first arguments:etc
 else
  stop
end