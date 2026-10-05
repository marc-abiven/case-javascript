fn call_expr_right cpl:obj value args:etc
 if is_empty args
  //single argument

  if same value "arr"
  elseif same value "obj"
  elseif same value "_"
  elseif same value "null"
  elseif same value "true"
  elseif same value "false"
  elseif is_numeric value
  elseif is_lit value
  elseif is_name value
   //evaluate

   let condition paren value
   let condition concat "is_fn" condition
   let call concat value "()"

   ret concat condition "?" call ":" value
  else
   //invalid rvalue

   let value to_lit value
   let message space "Invalid rvalue for" value
   let message concat message "."

   stop message
  end
 end

 ret call_expr_rvalue cpl value args:etc
end
