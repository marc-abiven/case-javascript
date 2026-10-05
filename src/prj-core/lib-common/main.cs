fn main
 //detect platform

 var has_window true

 try
  inline "window" //evaluate the variable
 catch
  assign has_window false
 end

 if has_window
  assign window.global window

 assign global.has_window has_window

 //debug

 if is_v8
  assign Error.stackTraceLimit 1024

 //globals

 assign global.debug false
 assign global.verbose 0 //for log
 assign global.mabynogy "mabynogy" //itself
 assign global.ushort_max mul 256 256
 assign global.uint32_max mul 256 256 256 256
 assign global.lf "\n"
 assign global.cr "\r"
 assign global.crlf concat cr lf
 assign global.punct "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 assign global.digit "0123456789"
 assign global.lower "abcdefghijklmnopqrstuvwxyz"
 assign global.upper to_upper lower
 assign global.kb 1024 //for byte_size
 assign global.mb mul kb 1024
 assign global.gb mul mb 1024
 assign global.tb mul gb 1024
 assign global.start time_get //for time_now
 assign global.tty_column tty_width
 assign global.log_stack arr //for capture
 assign global.log_secret null //for redact
 assign global.log_volatile null //for volatile
 assign global.log_file true //for log
 assign global.worker null

 if is_node
  //node

  assign global.cp require "child_process" //for os_user
  assign global.fs require "fs" //for fs.writeSync in stdout_write
  assign global.os require "os" //for os_home
  assign global.path require "path"
  assign global.util require "util" //for util.inspect in inspect
  assign global.wt require "worker_threads"

  assign global.main_thread wt.isMainThread

  //directories and log file

  let home os_home
  let pid to_str process.pid
  let pid pad_l pid "0" 7
  let base concat meta.app ".txt"

  assign global.config_mabynogy path_concat home ".config" mabynogy
  assign global.config_tmp path_concat config_mabynogy "tmp" meta.app pid
  assign global.config_cache path_concat config_mabynogy "cache" meta.app
  assign global.config_data path_concat config_mabynogy "data" meta.app
  assign global.config_log path_concat config_mabynogy "log" base
 elseif is_browser
  //browser

  assign global.main_thread true
 else
  stop

 //state machine

 assign global.app stm_init "app"

 //options

 if is_node
  assign global.argv slice process.argv 2

  if extract argv "--debug"
   assign debug true

  if extract argv "--verbose"
   verbose_on

  if extract argv "--quiet"
   verbose_off
 end

 //start

 stm_start app
end
