fn ast_call cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_full args
 check is_empty children

 let code expr_call args:etc

 ret obj code source
end