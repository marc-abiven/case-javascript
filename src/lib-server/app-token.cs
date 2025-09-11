fn app_token x:str
 //~ check is_str x

 let home os_home
 let path concat "." x
 let r path_concat home path
 let r file_load r
 let r base36_decode r
 let r salt r

 ret r
end
