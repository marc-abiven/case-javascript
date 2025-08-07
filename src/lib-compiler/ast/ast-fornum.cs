fn ast_fornum x y z
 check is_obj x
 check is_arr y
 check is_arr z
 
 let right expr_right y:etc
 let right paren right
 let right concat "let i=0;i<" right ";i++"
 let list paren right
 let block ast_block x z
 
 ret concat "for" list "\n" block
end
