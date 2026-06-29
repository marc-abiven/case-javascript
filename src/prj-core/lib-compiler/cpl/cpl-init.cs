fn cpl_init app:str cache
 if is_undef cache
  ret cpl_init app "compiler.json"

 //cache load

 let cache_path path_concat config_cache cache

 fn cache_load
  if is_file cache_path
   ret json_load cache_path

  let scans obj
  let compiles obj
  let uncomments obj

  ret obj scans compiles uncomments
 end

 //main

 //let scanner value cpl_scan
 let scanner value cpl_scan2
 let asts fn_select "ast_"
 let exprs fn_select "expr_"
 let fns arr
 let stack arr
 let out arr
 let target concat "out-" app ".js"
 let cache cache_load

 ret obj app scanner asts exprs fns stack out target cache_path cache
end