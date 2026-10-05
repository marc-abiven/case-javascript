fn init_shell stm:obj
 let ssh_timeout 2
 let common fs_locate "common"
 let vars obj ssh_timeout common

 stm_vars stm vars
end
