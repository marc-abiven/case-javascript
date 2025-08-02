fn ast_brk x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty y
 check is_empty z
 
 ret "break"
end
