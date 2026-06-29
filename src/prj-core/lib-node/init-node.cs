fn init_node stm:obj
 //on uncaught exception

 fn on_uncaught_exception error:obj kind:str
  stm_send stm "node-error" error kind
  stm_route stm

  exit_code 6
  process.exit
 end

 //on warning

 fn on_warning warning:obj
  stm_send stm "node-warning" warning
  stm_route stm

  exit_code 7
  process.exit
 end

 //on exit

 fn on_exit status:int
  stm_post stm "exit-worker" status
  stm_route stm

  stop
 end

 //main

 process.setMaxListeners 1024 //for sigint and os_parallel

 //modules

 let cp require "child_process"
 let crypto require "crypto"
 let http require "http"
 let https require "https"
 let os require "os"
 let path require "path"
 let tls require "tls"
 let tty require "tty"
 let util require "util"
 let state obj cp crypto http https os path tls tty util

 stm_state stm state

 //globals

 let tty_column tty_width
 let color false
 let log_file true //for log
 let binary process.execPath
 let cwd dir_current
 let cpu_time null //for cpu_load
 let script at process.argv 1
 let script path_real script
 let main_thread wt.isMainThread
 let state obj tty_column color log_file binary cwd cpu_time script

 stm_state stm state

 //dirs and log

 let home os_home
 let pid to_str process.pid
 let pid pad_l pid "0" 6
 let base concat meta.app ".txt"

 let config_mabynogy path_concat home ".config" mabynogy
 let config_tmp path_concat config_mabynogy "tmp" meta.app pid
 let config_cache path_concat config_mabynogy "cache" meta.app
 let config_data path_concat config_mabynogy "data" meta.app
 let config_log path_concat config_mabynogy "log" base
 let state obj config_mabynogy config_tmp config_cache config_data config_log

 stm_state stm state

 //main thread

 if is_main_thread
  //error and warning

  process.on "uncaughtExceptionMonitor" on_uncaught_exception
  process.on "warning" on_warning

  //create directories

  if not is_dir config_tmp
   dir_make config_tmp

  if not is_dir config_cache
   dir_make config_cache

  if not is_dir config_data
   dir_make config_data

  let dir path_dir config_log

  if not is_dir dir
   dir_make dir

  //options

  let argv slice process.argv 2
  var verbose verbose
  var color color
  var log_file log_file

  if extract argv "--verbose"
   assign verbose inc verbose

  if extract argv "--quiet"
   assign verbose dec verbose

  if extract argv "--color"
   assign color true

  if extract argv "--no-log"
   assign log_file false

  let state obj argv verbose color log_file

  stm_state stm state

  //set cwd

  let dir path_dir script

  dir_change dir

  //worker

  let workerData obj verbose
  let option obj workerData
  let worker new wt.Worker script option

  worker.on "exit" on_exit

  let state obj worker

  stm_state stm state
 else
  //worker
 end
end