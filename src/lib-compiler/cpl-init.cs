fn cpl_init
 let path "cache.txt"
 
 fn load_cache
  if is_file path
   let s file_read path
   
   ret json_decode s
  end
  
  ret obj
 end
 
 let cache load_cache
 let fns fn_match "ast_*"
 let asts arr
 
 forin fns
  let v get fns k
  let a split k "_"

  shift a
  
  let s join a "_"
  
  put asts s v
 end
 
 let stack arr
 let out arr
 
 ret obj asts stack out path cache
end
