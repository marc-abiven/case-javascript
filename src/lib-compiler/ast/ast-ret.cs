fn ast_ret cpl args children source
 check is_obj cpl
 check is_arr args
 check is_arr children
 check is_obj source

 check is_empty children

 var code ""

 if is_empty args
  assign code "return"
 else
  let right expr_right args:etc

  assign code space "return" right
 end

 ret obj code source
end