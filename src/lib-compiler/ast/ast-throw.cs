fn ast_throw cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty children

 let code expr_right args:etc
 let code space "throw" code

 ret obj code source
end
