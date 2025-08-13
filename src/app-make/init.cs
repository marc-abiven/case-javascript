fn init x:etc
 fn is_app x
  if not is_str x
   ret false
   
  let base concat "app-" x
  let path path_concat "src" base
  
  ret is_dir path
 end
 
 let parameters dup x
 let apps app_list
 
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
 var sudo false
 
 if extract parameters "--compile"
  assign run false

 if extract parameters "--sudo"
  assign sudo true

 let cpl cpl_init
 
 cpl_include cpl app
 
 let code cpl_generate cpl
 let sloc split code
 let sloc sloc.length
 let out concat "out-" app ".js"
 let node process.argv0
 
 file_save out code
 
 log "sloc" sloc
 
 if not cpl_check_syntax cpl out
  ret

 cpl_deinit cpl
  
 if run
  dir_reset "tmp"
  
  let arguments arr node "--trace-uncaught" out parameters:etc
  
  if same app "make"
   if sudo
    push arguments "--sudo"
  end
  
  if sudo
   unshift arguments "sudo"
   
  os_system arguments:etc
 end
end
