fn init_node
 //on uncaught exception

 fn on_uncaught_exception error:obj kind:str
  try
   let _error obj

   for Object.getOwnPropertyNames error //Error is not enumerable
    let v2 get error v

    put _error v v2
   end

   put _error "kind" kind

   let report report_init _error

   report_log report

   if is_remote
    report_mail report

   deinit_common
  catch e
   fallback_error "on-uncaught-exception" e error
  end

  assign zombie true //global

  process.exit 1
 end

 //on warning

 fn on_warning warning:obj
  try
   let stack split warning.stack

   shift stack
   unshift stack warning.message //inject the warning in the call stack

   let stack join stack
   let report report_init stack

   report_log report

   if is_remote
    report_mail report

   deinit_common
  catch e
   fallback_error "on-warning" e warning
  end

  assign zombie true //global

  process.exit 2
 end

 //main

 process.setMaxListeners 1024 //for sigint and os_parallel

 //modules

 assign global.cp require "child_process"
 assign global.crypto require "crypto"
 assign global.fs require "fs"
 assign global.http require "http"
 assign global.https require "https"
 assign global.os require "os"
 assign global.path require "path"
 assign global.tls require "tls"
 assign global.tty require "tty"
 assign global.util require "util"

 //globals

 assign global.tty_column tty_width
 assign global.color false
 assign global.log_file true
 assign global.binary process.execPath
 assign global.cwd dir_current
 assign global.script at process.argv 1
 assign global.script path_real script
 assign global.cpu_time null //for cpu_load

 //mabynogy

 let home os_home

 assign global.config_mabynogy path_concat home ".config" mabynogy

 //tmp

 let pid to_str process.pid
 let pid pad_l pid "0" 6

 assign global.config_tmp path_concat config_mabynogy "tmp" app pid

 dir_make config_tmp

 //log

 let base concat app ".txt"

 assign global.config_log path_concat config_mabynogy "log" base

 //error and warning

 process.on "uncaughtExceptionMonitor" on_uncaught_exception
 process.on "warning" on_warning

 //options

 let r slice process.argv 2

 if extract r "--verbose"
  assign verbose inc verbose

 if extract r "--quiet"
  assign verbose dec verbose

 if extract r "--color"
  assign color true

 if extract r "--no-log"
  assign log_file false

 //set cwd

 let dir path_dir script

 dir_change dir

 ret r
end
