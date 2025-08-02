fn cpl_block x y
 check is_obj x
 check is_arr y
 
 let a arr
 
 forof y
  let s ast_translate x v
  
  push a s
 end
 
 ret join a
end
