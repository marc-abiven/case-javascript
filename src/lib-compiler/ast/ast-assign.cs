fn ast_assign x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty z

 let left front y
 
 check is_name left
 
 let right slice y 1
 let rvalue expr_rvalue right:etc
 
 ret concat left "=" rvalue
end
