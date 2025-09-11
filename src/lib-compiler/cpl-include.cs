fn cpl_include x:obj

 fn get_files x:arr
  let r arr

  forof x
   let a dir_load v

   append r a
  end

  ret r
 end

 fn get_includes x:str
  let r arr
  let dir get_app_dir x
  let a path_concat dir "include.txt"
  let a file_load a

  forof split a
   let s path_concat "src" v

   push r s
  end

  push r dir

  ret r
 end

 fn get_app_dir x
  let r concat "src/app-" x

  if is_dir r
   ret r

  let r concat "src/spa-" x

  if is_dir r
   ret r

  stop
 end

 let includes get_includes x.app
 let files get_files includes

 forof files
  let ext path_ext v

  if different ext "cs"
   cont

  cpl_compile x v
 end
end
