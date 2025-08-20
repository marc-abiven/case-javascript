fn dir_read x y
 check is_str x

 if is_undef y
  ret dir_read x false

 check is_bool y

 let r arr
 let dir path_real x
 let a fs.readdirSync dir

 sort a

 forof a
  let s path_concat dir v

  if is_file s
   push r s

   cont
  end

  if y
   if is_dir s
    push r s
 end

 ret r
end