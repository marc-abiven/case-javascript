fn init_common
 //on tick
 
 fn on_tick
  if is_empty tasks
   ret
   
  //tick
   
  let generator shift tasks
  var iterator generator.next

  if not iterator.done
   push tasks generator
   
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
  let compile to_lit compile
  let compile concat "compile=" compile

  let sloc split source
  let sloc sloc.length
  let sloc concat "sloc=" sloc

  log app compile sloc
 end

 //main

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
  init args:etc
 elseif is_gn init
  let generator init args:etc
  
  push tasks generator
 end

 //deinit
  
 if is_empty tasks
  deinit_common
  
  ret
 end
 
 //first
  
 time_timeout on_tick
end
