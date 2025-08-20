fn ast_yield cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty children

 if is_empty parameters
  let code "yield"

  ret obj code source
 end

 let code expr_right parameters:etc
 let code space "yield" code

 ret obj code source
end