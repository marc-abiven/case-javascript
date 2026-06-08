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

  //cs sloc
  
  var cs 0
  
  let map dbg_source_map
  let map map.files
  
  forin map
   let v get map k
   
   for v
    if is_empty v
     cont
     
    assign cs inc cs
   end
  end
  
  //javascript sloc

  let js split source
  let js js.length
  
  //log

  let o obj compile cs js
  let s obj_option o

  log2 app s
 end

 //main

 //globals

 assign global.tasks arr
 assign global.ushort_max mul 256 256
 assign global.uint32_max mul 256 256 256 256

 //web

 assign global.unit "1.3vw"
 assign global.padding "0.3vw"
 assign global.border "0.1vw"
 assign global.font_family "monospace"
 assign global.font_size unit

 //other

 assign global.log_secret null //for redact
 assign global.log_volatile null //for volatile
 assign global.mabynogy "mabynogy" //itself

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
