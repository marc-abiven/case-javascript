fn ast_ret cpl parameters children source
 check is_obj cpl
 check is_arr parameters
 check is_arr children
 check is_obj source

 check is_empty children
 
 var code ""
 
 if is_empty parameters
  assign code "return"
 else
  let right expr_right parameters:etc

  assign code space "return" right
 end
 
 ret obj code source 
end
