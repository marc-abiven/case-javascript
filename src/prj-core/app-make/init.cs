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

  assign process.exitCode 5

  ret
 end

 //depends

 let include pkg_init "depend.cson"
 let paths pkg_resolve include app

 drop paths

 //run in parallel

 let commands arr

 for paths
  let base path_base v
  let app strip_l base "app-"
  let command arr "./make" app "--compile" "--quiet"

  push commands command
 end

 run os_batch commands

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

 //handle time as a binary

 let time_path silent os_execute "which" "time"
 let usage_path path_tmp "usage.txt"
 let time arr

 if is_full time_path
  let output concat "--output=" usage_path

  push time time_path
  push time "--format=%M"
  push time output
 end

 //format arguments

 let context node_context
 let argv node_argv
 let parameters arr context:etc args:etc
 let parameters dedup parameters
 let args arr time:etc argv:etc cpl.target parameters:etc

 //run

 let o run os_capture args:etc

 //propagate the exit code

 assign process.exitCode o.status

 //parse an error

 cpl_log_error cpl o.err

 //memory usage

 if is_full time_path
  let usage file_load usage_path

  fs_remove usage_path

  let usage split usage
  let usage back usage
  let usage to_uint usage
  let usage mul usage 1024
  let usage byte_size usage
  let o obj usage
  let s obj_option o

  log2 app s
 end
end