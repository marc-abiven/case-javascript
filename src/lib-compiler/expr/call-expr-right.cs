fn call_expr_right cpl:obj x y:etc
 if is_empty y
  if same x "arr"
  elseif same x "obj"
  elseif same x "_"
  elseif same x "null"
  elseif same x "true"
  elseif same x "false"
  elseif is_numeric x
  elseif is_lit x
  else
   let condition paren x
   let condition concat "is_fn" condition
   let call concat x "()"

   ret concat condition "?" call ":" x
  end
 end

 ret call_expr_rvalue cpl x y:etc
end