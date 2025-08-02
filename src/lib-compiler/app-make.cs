fn app_make x
 check is_str x
  
 fn get_js x
  check is_str x

  let r arr
  let s file_read x
  
  forof split s
   let s trim_r v
   
   if is_empty s
    cont
   
   push r s
  end
  
  ret r
 end
 
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
 
 let cpl call cpl_init
 let includes get_includes x
 let lines arr
 
 forof get_files includes
  let ext path_ext v
  
  if same ext "js"
   let a get_js v
   
   append lines a
  elseif same ext "cs"
   let s file_read v
   let js cpl_compile cpl s
   let a split js
   
   append lines a
  end
 end
 
 push lines "main()"

 cpl_deinit cpl
 
 ret join lines
end
