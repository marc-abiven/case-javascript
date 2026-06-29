fn init_shell stm:obj
 let ssh_timeout 2
 let common fs_locate "common"

 let state obj ssh_timeout common

 stm_state stm state
end