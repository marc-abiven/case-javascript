fn ast_elseif x y z
 check is_obj x
 check is_arr y
 check is_arr z
 
 let rvalue expr_rvalue y:etc
 let list paren rvalue
 let block ast_block x z
 
 ret concat "else if" list "\n" block
end
