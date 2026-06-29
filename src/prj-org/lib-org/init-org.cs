fn init_org stm:obj
 let login_merlin "mabynogy@mabynogy.org"
 let org_user_path path_concat common "users.cson"

 let config_padding 128
 let config_tag mabynogy

 let free_server_sh "FreeServer.sh"

 let state obj login_merlin org_user_path config_padding config_tag free_server_sh

 stm_state stm state
end