fn cpl_init
 let path "cache.txt"
 
 fn load_cache
  if is_file path
   let s file_read path
   
   ret json_decode s
  end
  
  ret obj
 end
 
 let cache call load_cache
 
 ret obj path cache
end
