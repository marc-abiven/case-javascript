fn dir_load path:str with_dirs
 if is_undef with_dirs
  ret dir_load path false

 check is_bool with_dirs

 let r arr

 for dir_read path true
  //file

  if is_file v
   push r v

   cont
  end

  //directory

  if is_dir v
   if with_dirs
    push r v

   let a dir_load v with_dirs

   append r a

   cont
  end

  //symbolic link

  if is_symbolic_link v
   cont

  //any

  stop
 end

 ret r
end
