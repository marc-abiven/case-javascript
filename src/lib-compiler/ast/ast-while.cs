fn ast_while x y z
 check is_obj x
 check is_arr y
 check is_arr z
 
 let right expr_right y:etc
 let list paren right
 let block ast_block x z
 
 ret concat "while" list "\n" block
end
