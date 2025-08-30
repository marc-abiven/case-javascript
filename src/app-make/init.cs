gn init x:etc
 fn is_app x
  if not is_str x
   ret false

  let base concat "app-" x
  let path path_concat "src" base

  ret is_dir path
 end

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

 var run true

 if extract args "--compile"
  assign run false

 let cpl cpl_init app

 cpl_include cpl

 let code cpl_generate cpl
 let out concat "out-" app ".js"

 file_save out code

 if not cpl_check_syntax cpl out
  ret

 cpl_deinit cpl

 if not run
  ret

 let usage_path concat "usage-" process.pid ".txt"
 let usage_path path_tmp "usage.txt"
 let output concat "--output=" usage_path
 let time arr "time" "--format=%M" output
 let arguments arr time:etc binary "--trace-uncaught" "--trace-deprecation" out args:etc

 if gt verbose 0
  push arguments "--verbose"
 elseif lt verbose 0
  push arguments "--quiet"

 if is_color
  push arguments "--color"

 let o run os_capture arguments:etc
 let status o.status
 let err o.err

 if different status 0
  let s concat "status=" status
  
  log app s
 end

 if is_full err 
  if not cpl_log_error cpl out err
   let s txt_prepend err "make-error> "
   
   log s
  end
 end
 
 let usage file_read usage_path
 let usage trim usage

 fs_remove usage_path
 
 if gte verbose 0
  let usage split usage
  let usage back usage
  let usage to_uint usage
  let usage mul usage 1024
  let usage byte_size usage
  let usage to_lit usage
  let usage concat "usage=" usage

  log app usage
 end
end
