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

 let cpl cpl_init app

 cpl_include cpl

 let code cpl_generate cpl
 let out concat "out-" app ".js"
 let node process.execPath

 file_save out code

 if not cpl_check_syntax cpl out
  ret

 cpl_deinit cpl

 if not run
  ret
  
 dir_reset "tmp"

 let usage_path path_tmp "usage.txt"
 let output concat "--output=" usage_path
 let time arr "time" "--format=%M" output
 let arguments arr time:etc node "--trace-uncaught" out parameters:etc
 
 if same app "make"
  if sudo
   push arguments "--sudo"
 end

 if sudo
  unshift arguments "sudo"

 if verbose
  push arguments "--verbose"

 os_system arguments:etc
 
 let usage file_read usage_path
 let usage trim usage
 
 fs_remove usage_path
 
 let usage split usage
 let usage back usage
 let usage to_uint usage 
 let usage mul usage 1024
 let usage byte_size usage
 let usage to_lit usage
 let usage concat "usage=" usage
 
 log app usage
end
