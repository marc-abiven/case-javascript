gn init x:etc
 //arguments

 let args dup x
 let apps app_list
 let names obj_keys apps

 if is_empty args
  dump names

  ret
 end

 let app shift args

 if not has apps app
  dump names

  ret
 end

 //depends

 let depends pkg_depend app

 //run in parallel

 let contexts arr

 for depends
  let context os_parallel "./make" v "--compile" "--quiet"

  push contexts context
 end

 run os_wait contexts

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

 //format arguments

 let usage_path concat "usage-" process.pid ".txt"
 let usage_path path_tmp "usage.txt"
 let output concat "--output=" usage_path
 let time arr "time" "--format=%M" output
 let context node_context
 let argv node_argv
 let args arr time:etc argv:etc cpl.target context:etc args:etc
 let args dedup args

 //run

 let o run os_capture args:etc
 let status o.status
 let err o.err

 if different status 0
  let s concat "status=" status

  log app s
 end

 //error

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