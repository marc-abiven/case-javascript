fn ast_gn x y z
 check is_obj x
 check is_arr y
 check is_arr z
 
 ret call_ast_xn x y z "function*"
end
