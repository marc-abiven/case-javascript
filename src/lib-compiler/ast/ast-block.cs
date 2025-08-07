fn ast_block x y
 check is_obj x
 check is_arr y
 
 let s cpl_block x y
 let s indent s
 
 if is_empty s
  ret "{\n}"
  
 ret concat "{\n" s "\n}"
end
