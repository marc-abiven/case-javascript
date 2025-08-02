fn ast_ret x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty z
 
 if is_empty y
  ret "return"
 
 let rvalue expr_rvalue y:etc
 
 ret space "return" rvalue
end
