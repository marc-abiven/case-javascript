fn app_token x
 check is_str x
 
 let home call os_home
 let path concat "." x
 let r path_concat home path
 let r file_read r
 let r trim r
 let r base36_decode r
 let r salt r
 
 ret r
end
