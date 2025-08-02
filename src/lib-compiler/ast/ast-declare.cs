fn ast_declare x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty z

 let left front y
 let right slice y 1
 let right expr_rvalue right:etc
 
 ret concat left "=" right
end
