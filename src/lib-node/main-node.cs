fn main_node
 fn on_uncaught_exception x y
  check is_obj x
  check is_str y
  
  let title space x.message "/" y
  
  flower title

  let s dbg_origin_cs x
  let s tbl_render s
  
  log s
  
  let s dbg_backtrace x
  let s tbl_render s
  
  log s
  
  let s dbg_origin_js x
  let s tbl_render s
  
  log s
  
  process.exit 1
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
