fn ast_else x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty y
 
 let block ast_block x z
 
 ret concat "else\n" block
end
