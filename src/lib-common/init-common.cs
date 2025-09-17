fn init_common
 fn log_compile
  let compile time_hn compile
  let compile to_lit compile
  let compile concat "compile=" compile

  let sloc split source
  let sloc sloc.length
  let sloc concat "sloc=" sloc

  log app compile sloc
 end
 
 var args arr

 if is_node
  assign args init_node
 elseif is_browser
  init_browser
 else
  stop

 assign global.source dbg_source
 assign global.font_family "monospace"
 assign global.font_size "1.3vw"

 let skip arr "init_common" "init_node" "init_browser"

 forin fns
  if contain skip k
   cont

  if match k "init_*"
   let v get fns k

   v
  end
 end

 if gte verbose 0
  log_compile

 if is_fn init
  init args:etc
  deinit_common
 elseif is_gn init
  let generator init args:etc

  fn on_timer
   let iterator generator.next

   if iterator.done
    deinit_common
    ret
   end

   time_timeout on_timer
  end

  on_timer
 end
end
