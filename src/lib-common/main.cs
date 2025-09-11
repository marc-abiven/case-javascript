fn main
 fn log_compile
  let compile time_hn compile
  let compile to_lit compile
  let compile concat "compile=" compile

  let sloc split source
  let sloc sloc.length
  let sloc concat "sloc=" sloc

  log app compile sloc
 end

 var has_window true

 try
  inline "window"
 catch
  assign has_window false
 end

 if has_window
  assign window.global window
  assign global.has_window true
 else
  assign global.has_window false

 assign global.zombie false
 assign global.start time_get
 assign global.punct "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 assign global.digit "0123456789"
 assign global.lower "abcdefghijklmnopqrstuvwxyz"
 assign global.upper to_upper lower
 assign global.output null
 assign global.verbose 0
 assign global.color false
 assign global.minute 60
 assign global.hour mul 60 minute
 assign global.day mul 24 hour
 assign global.month mul 30 day
 assign global.year mul 12 month
 assign global.traces arr
 assign global.entities dom_entities

 if is_node
  init_node
 elseif is_browser
  init_browser
 else
  stop

 assign global.source dbg_source

 let skip arr "init_common" "init_node" "init_browser"

 forin fns
  if contain skip k
   cont

  if match k "init_*"
   let v get fns k

   v
  end
 end

 if is_node
  let args slice process.argv 2

  if extract args "--verbose"
   assign verbose inc verbose

  if extract args "--quiet"
   assign verbose dec verbose

  if extract args "--color"
   assign color true

  if gte verbose 0
   log_compile

  init_common args:etc
 elseif is_browser
  fn on_load x:obj
   if same document.readyState "complete"
    log_compile
    init_common

    assign window.onload null
   end
  end

  assign window.onload on on_load
 else
  stop
end
