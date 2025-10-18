gn init x:etc
 //is app

 fn is_app x
  if not is_str x
   ret false

  let base concat "app-" x
  let path path_concat "src" base

  ret is_dir path
 end

 //main

 let args dup x
 let apps app_list

 if is_empty args
  dump apps
  
  ret
 end

 let app shift args

 if not is_app app
  dump apps
  
  ret
 end
 
 //compile
 
 var run true

 if extract args "--compile"
  assign run false

 let cpl cpl_init app

 cpl_include cpl
 
 let code cpl_generate cpl
 
 file_save cpl.target code

 if not cpl_check_syntax cpl
  ret

 cpl_deinit cpl
 
 //compile only

 if not run
  ret

 let usage_path concat "usage-" process.pid ".txt"
 let usage_path path_tmp "usage.txt"
 let output concat "--output=" usage_path
 let time arr "time" "--format=%M" output
 let context node_context
 let argv node_argv
 let args arr time:etc argv:etc cpl.target context:etc args:etc
 let args dedup args

 let o run os_capture args:etc
 let status o.status
 let err o.err

 if different status 0
  let s concat "status=" status

  log app s
 end

 if is_full err
  if not cpl_log_error cpl err
   let s txt_prepend err "make-error> "

   log s
  end
 end
 
 //memory usage
 
 let usage file_load usage_path

 fs_remove usage_path

 if gte verbose 0
  let usage split usage
  let usage back usage
  let usage to_uint usage
  let usage mul usage 1024
  let usage byte_size usage
  let o obj usage
  let s obj_option o

  log app s
 end
end
