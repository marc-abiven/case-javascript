fn expr_right x y:etc
 
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
   let fn to_lit "function"
   let condition paren x
   let condition concat "typeof" condition "===" fn
   let condition paren condition
   let call concat x "()"
   
   ret concat condition "?" call ":" x
  end
 end

 ret expr_rvalue x y:etc
end
