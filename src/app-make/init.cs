fn init x:etc
 fn get_apps
  let r arr
  
  forof dir_read "src" true
   let base path_base v
   let a split base "-"
   
   shift a
   
   let name join a "-"
   
   push r name
  end
  
  ret r
 end
 
 fn is_app x
  if not is_str x
   ret false
   
  let base concat "app-" x
  let path path_concat "src" base
  
  ret is_dir path
 end
 
 let parameters dup x
 let apps get_apps
 
 if is_empty parameters  
  dump apps
  
  ret
 end

 let app shift parameters
  
 if not is_app app
  dump apps
  
  ret
 end
 
 var run true
 
 if extract parameters "--compile"
  assign run false
 
 let code app_make app
 let out concat "out-" app ".js"
 let node process.argv0
 
 file_save out code
 
 if run
  dir_reset "tmp"
  os_system node "--trace-uncaught" out parameters:etc
 end
end
