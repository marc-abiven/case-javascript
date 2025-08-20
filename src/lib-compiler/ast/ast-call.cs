fn ast_call cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_full parameters
 check is_empty children

 let code expr_call parameters:etc

 ret obj code source
end