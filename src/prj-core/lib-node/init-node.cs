fn init_node stm:obj
 //on uncaught exception

 fn on_uncaught_exception error:obj kind:str
  //let the timer do its work
 end

 //on uncaught exception
 //the post events will be processed by the timer in stm_start

 fn on_uncaught_exception_monitor error:obj kind:str
  let context obj kind

  stm_post stm "error" error context

  exit_code 6
 end

 //on warning

 fn on_warning warning:obj
  stm_post stm "warning" warning

  exit_code 7
 end

 //on sigint

 fn on_sigint signal:str n:uint
  let context obj signal n

  stm_post app "sigint" context
 end

 //on worker error

 fn on_worker_error error:obj
  stm_post stm "worker-error" error
 end

 //on worker exit

 fn on_worker_exit status:int
  stm_post stm "worker-exit" status
 end

 //main

 process.setMaxListeners 1024 //for sigint and os_parallel

 //modules

 let crypto require "crypto"
 let http require "http"
 let https require "https"
 let tls require "tls"
 let tty require "tty"
 let vars obj crypto http https tls tty

 stm_vars stm vars

 //globals

 let binary process.execPath
 let script at process.argv 1
 let script path_real script
 let cwd dir_current
 let cpu_time null //for cpu_load
 let vars obj binary script cwd cpu_time

 stm_vars stm vars

 //source

 let source dbg_source
 let vars obj source

 stm_vars stm vars

 //options

 if extract argv "--color"
  assign global.color true

 if extract argv "--no-log"
  assign global.log_file false

 //main thread

 if is_main_thread
  //install events

  let on_uncaught_exception on on_uncaught_exception
  let on_uncaught_exception_monitor on on_uncaught_exception_monitor
  let on_warning on on_warning
  let on_sigint on on_sigint
  let on_worker_error on on_worker_error
  let on_worker_exit on on_worker_exit

  process.on "uncaughtException" on_uncaught_exception
  process.on "uncaughtExceptionMonitor" on_uncaught_exception_monitor
  process.on "warning" on_warning
  process.on "SIGINT" on_sigint

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

  //set cwd

  let dir path_dir script

  dir_change dir

  //worker

  let workerData obj verbose
  let option obj workerData

  assign worker new wt.Worker script option //global

  worker.on "error" on_worker_error
  worker.on "exit" on_worker_exit

  //disable the display of ctrl+c

  if is_interactive
   os_system "stty" "-echoctl"

  ret
 end

 //worker

 if is_worker
  forin wt.workerData
   set global k v
  end

  ret
 end

 //any

 stop
end
