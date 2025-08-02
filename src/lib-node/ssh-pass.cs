fn ssh_pass x y:etc
 check is_str x
 
 ret os_execute "sshpass" "-p" x y:etc
end
