fn to_lisp x:str
 if match_l x "_"
  let s strip_l x "_"
  
  if is_empty s
   ret "-"
  
  ret to_lisp s
 end
 
 ret replace x "_" "-"
end
