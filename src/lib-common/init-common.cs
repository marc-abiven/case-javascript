fn init_common
 //on tick

 fn on_tick
  //tick
  
  let task shift tasks
  let result task.iterator.next

  if not result.done
   push tasks task
   
  //deinit
   
  if is_empty tasks
   deinit_common
   
   ret
  end
  
  //next
  
  time_timeout on_tick
 end

 //log compile

 fn log_compile
  let compile time_hn compile
  let sloc split source
  let sloc sloc.length  
  let o obj compile sloc
  let s obj_option o

  log app s
 end

 //main
 
 //globals

 assign global.tasks arr

 assign global.unit "1.3vw"
 assign global.padding "0.3vw"
 assign global.border "0.1vw"
 assign global.font_family "monospace"
 assign global.font_size unit
 
 //init platform

 var args arr

 if is_node
  assign args init_node
 elseif is_browser
  init_browser
 else
  stop

 assign global.source dbg_source
 
 //init lib

 let skip arr "init_common" "init_node" "init_browser"
 
 forin fns
  if contain skip k
   cont

  if match k "init_*"
   let v get fns k

   v
  end
 end
 
 //init app

 if gte verbose 0
  log_compile

 if is_fn init
  //function
  
  init args:etc
  
  //deinit
  
  if is_empty tasks
   deinit_common
   
   ret
  end  
 elseif is_gn init
  //generator
  
  task_run init args:etc
 end

 //first
  
 on_tick
end
