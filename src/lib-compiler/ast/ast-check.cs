fn ast_check x y z
 check is_obj x
 check is_arr y
 check is_arr z
 check is_empty z
  
 let r join y ","
 let r paren r
 let r concat "check" r
 
 ret r
end
