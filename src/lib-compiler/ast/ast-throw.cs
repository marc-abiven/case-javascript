fn ast_throw x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty z
 
 let rvalue expr_rvalue y:etc
  
 ret space "throw" rvalue
end
