fn ast_yield cpl:obj args:arr children:arr source:obj
 check is_empty children

 if is_empty args
  let code "yield"

  ret obj code source
 end

 let code call_expr_right cpl args:etc
 let code space "yield" code

 ret obj code source
end
