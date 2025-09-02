fn init_node
 fn on_uncaught_exception error message
  check is_obj error
  check is_str message

  let report report_init error

  assign report.title space report.title "/" message

  report_log report

  if is_remote
   report_mail report

  deinit_common

  assign zombie true

  process.exit 1
 end

 assign global.binary process.execPath

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

 process.on "uncaughtExceptionMonitor" on_uncaught_exception

 let tmp path_tmp
 let tmp path_dir tmp

 dir_make tmp
end
