fn init_org
 let home os_home
 let config path_concat home ".common"
 
 if is_file config
  assign global.common home
 else
  assign global.common "/home/common"
  
 assign global.org_user_path path_concat common "users.json"
end
