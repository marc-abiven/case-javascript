fn ast_ret cpl:obj args:arr children:arr source:obj
 check is_empty children

 var code ""

 if is_empty args
  assign code "return"
 else
  let right call_expr_right cpl args:etc

  assign code space "return" right
 end

 ret obj code source
end
