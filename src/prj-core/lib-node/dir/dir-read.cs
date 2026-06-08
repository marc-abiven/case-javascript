fn dir_read x:str with_dirs
 if is_undef with_dirs
  ret dir_read x false

 check is_bool with_dirs

 let r arr
 let dir path_real x
 let a fs.readdirSync dir

 sort a

 for a
  let s path_concat dir v

  if is_file s
   push r s
  elseif is_dir s
   if with_dirs
    push r s
  elseif is_symbolic_link s
  else
   stop
  end
 end

 ret r
end
