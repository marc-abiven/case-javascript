fn cpl_block x y
 check is_obj x
 check is_arr y

 check is_obj x
 check is_arr y
 
 let r arr
 
 forof y
  let a cpl_translate x v
  
  append r a
 end
 
 ret r
end
