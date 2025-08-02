fn ast_catch x y z
 check is_obj x
 check is_arr y
 check is_arr z

 let block ast_block x z
 
 if is_empty y
  ret concat "catch\n" block
 
 check is_single y
 
 let identifier front y
 
 check is_identifier identifier
 
 let list paren identifier
 
 ret concat "catch" list "\n" block
end
