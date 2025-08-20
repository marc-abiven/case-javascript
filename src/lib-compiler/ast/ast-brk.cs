fn ast_brk cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty parameters
 check is_empty children

 let code "break"

 ret obj code source
end