fn main
 //detect platform

 var has_window true

 try
  inline "window"
 catch
  assign has_window false
 end
 
 if has_window
  assign window.global window

 assign global.has_window has_window

 //globals

 if is_node
  assign global.fs require "fs"
  assign global.wt require "worker_threads"

  assign global.main_thread wt.isMainThread
 elseif is_browser
  assign global.main_thread true
 else
  stop

 assign global.verbose 0 //for log
 assign global.start time_get //for time_now
 assign global.minute 60 //for time_delay
 assign global.hour mul 60 minute
 assign global.day mul 24 hour
 assign global.week mul 7 day
 assign global.month mul 30 day
 assign global.year mul 12 month

 //data
 
 if is_node
  //node
  
  if is_worker
   forin wt.workerData
    set global k v
   end
  end
 elseif is_browser
  //browser
 end

 //stm

 assign global.stm stm_init

 stm_start stm
end
