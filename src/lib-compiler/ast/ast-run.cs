fn ast_run x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_full y
 check is_empty z
 
 let call expr_call y:etc
 
 ret space "yield*" call
end
