gn init x:etc
 //dump apps

 fn dump_apps apps:obj
  let o obj

  forin apps
   let v path_shorten v

   put o k v
  end

  //print

  let t to_tbl o

  tbl_index t

  let t tbl_render t

  log t
 end

 //main

 //arguments

 let args dup x
 let apps app_list
 let names obj_keys apps

 if is_empty args
  dump_apps apps

  ret
 end

 let app shift args

 if not has apps app
  dump_apps apps

  exit_code 5

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
  let target cpl.target
  let size file_size target
  let size byte_size size
  let o obj target size
  let s obj_option o

  trace "compile" s

  ret
 end

 //handle the time command as a binary

 let time_path os_which "time"
 let usage_path path_tmp "usage.txt"
 let time arr

 if is_str time_path
  let output concat "--output=" usage_path

  push time time_path
  push time "--format=%M"
  push time output
 end

 //format arguments

 let context node_context
 let argv node_argv
 let parameters arr

 //no log to file if we are bootstraping make

 if same app "make"
  push parameters "--no-log"

 append parameters context
 append parameters args

 let parameters dedup parameters
 let args arr time:etc argv:etc cpl.target parameters:etc

 //run

 let o run os_capture args:etc

 //propagate the exit code to the current process

 exit_code o.status

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

 //dbg
 //debug_leak
 //stm_dump stm
end