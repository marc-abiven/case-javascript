fn cpl_init app:str
 let path "cache.txt"

 fn load_cache
  if is_file path
   let s file_load path

   ret json_decode s
  end

  let scans obj
  let files obj

  ret obj scans files
 end

 let asts fn_select "ast_"
 let exprs fn_select "expr_"
 let fns arr
 let files obj
 let stack arr
 let out arr
 let target concat "out-" app ".js"
 let cache load_cache

 ret obj app asts exprs fns files stack out target path cache
end
