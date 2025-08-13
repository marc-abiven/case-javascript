fn call_ast_declare cpl parameters children source keyword
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source
 check is_str keyword

 check is_empty children
 
 let identifier front parameters
 
 check is_identifier identifier
 
 let code slice parameters 1
 let code expr_right code:etc
 let code concat identifier "=" code
 let code space keyword code
 
 ret obj code source
end
