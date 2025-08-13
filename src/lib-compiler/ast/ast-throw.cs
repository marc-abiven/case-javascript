fn ast_throw cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty children
 
 let code expr_right parameters:etc
 let code space "throw" code
 
 ret obj code source
end
