fn cpl_include x y
 check is_obj x
 check is_str y

 fn get_files x
  check is_arr x

  let r arr
  
  forof x
   let a dir_load v
   
   append r a
  end
  
  ret r
 end
 
 fn get_includes x
  check is_str x
  
  let r arr
  let dir get_app_dir x  
  let a path_concat dir "include.txt"  
  let a file_read a
  let a trim a
  
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

 let includes get_includes y
 
 forof get_files includes
  let ext path_ext v
  
  if same ext "cs"
   cpl_compile x v
 end 
end
