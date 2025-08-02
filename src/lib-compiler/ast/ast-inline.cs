fn ast_inline x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_single y
 check is_empty z
 
 let first front y
 
 check is_lit first
 
 ret unwrap first
end
