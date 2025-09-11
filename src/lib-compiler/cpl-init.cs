fn cpl_init x:str
 let path "cache.txt"

 fn load_cache
  if is_file path
   let s file_load path

   ret json_decode s
  end

  ret obj
 end

 let cache load_cache
 let asts fn_select "ast_"
 let app x
 let fns arr
 let files obj
 let stack arr
 let out arr
 let target concat "out-" app ".js"

 ret obj app asts fns files stack out target path cache
end
