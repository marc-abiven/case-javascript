fn main_node
 fn finalize
  dir_change cwd
  process.exit 1
 end
 
 fn on_uncaught_exception x y
  check is_obj x
  check is_str y
  
  let report dbg_report x
  
  if not is_server
   finalize
   
  let pre arr
  
  if is_full report.talk 
   push pre report.talk
   push pre ""
  end  

  if is_full report.cs   
   push pre report.cs
   push pre ""
  end
  
  if is_full report.backtrace
   push pre report.backtrace
   push pre ""
  end

  if is_full report.js
   push pre report.js
  
  let pre join pre
  let pre txt_cut pre 78
  let pre concat "<pre>" pre "</pre>"
  
  let html arr
  
  push html "<!doctype html>"
  push html "<html>"
  push html "<body>"
  push html pre
  push html "</body>"
  push html "</html>"
  
  let html join html
  let host os_host
  let subject space report.title "/" host
  
  mail author subject html
  
  finalize
 end

 assign global.cp require "child_process"
 assign global.crypto require "crypto"
 assign global.fs require "fs"
 assign global.http require "http"
 assign global.os require "os"
 assign global.path require "path"
 assign global.util require "util"

 process.on "uncaughtExceptionMonitor" on_uncaught_exception
end
