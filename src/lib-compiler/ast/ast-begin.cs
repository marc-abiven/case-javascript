fn ast_begin x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty y
 
 ret ast_block x z
end
