fn ast_yield x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty z
 
 if is_empty y
  ret "yield"

 let right expr_right y:etc
 
 ret space "yield" right
end
