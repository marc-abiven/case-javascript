fn ast_elseif x y z
 check is_obj x
 check is_arr y
 check is_arr z
 
 let right expr_right y:etc
 let list paren right
 let block ast_block x z
 
 ret concat "else if" list "\n" block
end
