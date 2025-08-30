fn ast_inline cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_single args
 check is_empty children

 let code front args

 check is_lit code

 let code unwrap code

 ret obj code source
end
