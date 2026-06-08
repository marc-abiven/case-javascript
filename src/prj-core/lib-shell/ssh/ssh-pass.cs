gn ssh_pass x:etc
 let args dup x
 let first shift args

 //the default function is os_execute

 if is_str first
  ret run ssh_pass os_execute x:etc

 //redact

 check is_xn first

 let token shift args

 check is_str token

 let arguments arr "sshpass" "-p" token args:etc

 ret run redact token first arguments:etc
end