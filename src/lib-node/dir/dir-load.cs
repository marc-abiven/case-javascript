fn dir_load x:str with_dirs
 if is_undef with_dirs
  ret dir_load x false

 check is_bool with_dirs

 let r arr

 for dir_read x true
  if is_file v
   push r v
  elseif is_dir v
   if with_dirs
    push r v

   let a dir_load v with_dirs

   append r a
  else
   stop
 end

 ret r
end
