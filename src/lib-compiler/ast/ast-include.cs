fn ast_include cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_single parameters
 check is_empty children
 
 let path front parameters
 
 check is_lit path
 
 let path unwrap path
 
 stop 
end
 
