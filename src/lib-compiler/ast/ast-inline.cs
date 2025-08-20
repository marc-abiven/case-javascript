fn ast_inline cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_single parameters
 check is_empty children

 let code front parameters

 check is_lit code

 let code unwrap code

 ret obj code source
end