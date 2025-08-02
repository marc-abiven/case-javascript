fn dir_load x
 check is_str x
 
 let r arr
 
 forof dir_read x true
  if is_file v
   push r v
  elseif is_dir v
   let a dir_load v
   
   append r a
  else
   stop
 end
 
 ret r
end
