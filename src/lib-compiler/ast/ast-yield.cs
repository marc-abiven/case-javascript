fn ast_yield cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty children

 if is_empty args
  let code "yield"

  ret obj code source
 end

 let code expr_right args:etc
 let code space "yield" code

 ret obj code source
end