fn ast_call x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_full y
 check is_empty z
 
 ret expr_call y:etc
end
