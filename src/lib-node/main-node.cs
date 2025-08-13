fn main_node
 fn on_uncaught_exception x y
  check is_obj x
  check is_str y
  
  let name app_name
  let title space x.message "/" y "/" name
  
  flower title
  
  dbg_origin_cs x.stack
  
  let backtrace dbg_backtrace x.stack
  
  if is_full backtrace  
   tbl_remove_column backtrace "njs"
   tbl_remove_column backtrace "js"
   
   let s tbl_render backtrace
   let s txt_prepend s "> "
   
   flower "backtrace"
   log s
  end
  
  dbg_origin_js x.stack
  
  dir_change cwd  
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
