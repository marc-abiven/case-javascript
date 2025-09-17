fn init_node
 fn on_uncaught_exception error:obj message:str
  try
   let report report_init error

   assign report.title space report.title "/" message

   report_log report

   if is_remote
    report_mail report

   deinit_common
  catch e
   fallback_error "on-uncaught-exception" e error
  end

  assign zombie true

  process.exit 1
 end

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

 assign global.color false
 assign global.log_file true
 assign global.binary process.execPath
 assign global.cwd dir_current
 assign global.script at process.argv 1
 assign global.script path_real script

 process.on "uncaughtExceptionMonitor" on_uncaught_exception

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
 
 //create tmp
  
 let tmp path_tmp
 let tmp path_dir tmp

 dir_make tmp
 
 ret r
end
