fn org_user_uninstall user:str
 let home os_home user
 let bashrc path_concat home ".bashrc"

 check sudo_is_file bashrc

 config_clean bashrc
end