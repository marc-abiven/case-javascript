fn ast_fornum x y z
 check is_obj x
 check is_arr y
 check is_arr z
 
 let rvalue expr_rvalue y:etc
 let rvalue concat "let i=0;i<" rvalue ";i++"
 let list paren rvalue
 let block ast_block x z
 
 ret concat "for" list "\n" block
end
