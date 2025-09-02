fn cpl_init x
 check is_str x

 let path "cache.txt"

 fn load_cache
  if is_file path
   let s file_read path

   ret json_decode s
  end

  ret obj
 end

 let cache load_cache
 let asts fn_select "ast_"
 let app x
 let fns arr
 let stack arr
 let out arr

 ret obj app asts fns stack out path cache
end