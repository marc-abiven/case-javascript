fn report_init error _context map
 if is_str error
  //make a shim of the error

  let stack error
  let lines split error
  let message front lines
  let error obj stack message

  ret report_init error _context map
 end

 check is_obj error

 if is_def _context
  check is_obj _context

 if is_undef map
  let map dbg_source_map

  ret report_init error _context map
 end

 check is_obj map

 //log trace

 fn log_trace
  if is_empty traces //global
   ret

  flower "trace"

  for traces
   log ">" v
  end
 end

 //log stack

 fn log_stack stack:str
  dbg_origin_render stack "cs" map
 end

 //log backtrace

 fn log_backtrace stack:str map:obj
  let backtrace dbg_backtrace stack map

  if is_empty backtrace
   ret

  //shorten the paths

  for backtrace
   if is_absolute v.path
    assign v.path path_shorten v.path
  end

  tbl_remove_column backtrace "njs"
  tbl_remove_column backtrace "js"

  let backtrace tbl_render backtrace
  let backtrace txt_prepend backtrace "> "

  flower "backtrace"
  log backtrace
 end

 //log history

 fn log_history
  flower "state machine"

  let column app.column

  assign app.column false //always show the columns

  let t stm_history app
  let t tbl_render t

  log t

  assign app.column column
 end

 //get history

 fn get_history
  let s capture log_history
  let lines arr

  for split s
   let line space ">" v
   let line head line tty_column //preserve the width

   push lines line
  end

  ret join lines
 end

 //main

 let context obj

 //message

 var message error.message

 if is_word message //stop
  put context "reason" message

  assign message "An error has occured"
 else
  assign message strip_r message "."
  assign message txt_inline message //can contain new lines
 end

 //app

 put context "app" meta.app

 //type

 let type get_class error
 let type to_snake type

 if same type "error"
 elseif same type "object"
 else
  put context "type" type

 //uptime

 let uptime time_now
 let uptime time_delay uptime

 put context "uptime" uptime

 if is_browser
  //browser

  //host

  put context "host" location.hostname

  //location

  let location to_str location

  put context "location" location

  //browser name

  let browser browser_get

  put context "browser" browser

  //agent

  put context "agent" navigator.userAgent

  //referrer

  var referrer null

  if is_full document.referrer
   let url_referer url_parse document.referrer
   let url_location url_parse context.location

   if different url_referer.host url_location.host
    put context "referrer" document.referrer
  end
 elseif is_node
  //node

  //errno

  let errno error.errno

  if is_undef errno
  elseif is_null errno
  elseif same errno 0
  else
   put context "errno" errno

  //host

  let host os_host

  put context "host" host
 else
  stop

 //merge the parameters

 if is_obj _context
  forin _context
   put context k v
  end
 end

 //error properties

 let skip arr "message" "stack" "errno"

 for obj_properties error
  let k v
  let v get error k

  if contain skip k
   cont

  if is_null v
   cont

  if is_empty v
   cont

  put context k v
 end

 //format

 let title capture flower_box message
 let context to_tbl context

 tbl_pad_l context "key"

 let context tbl_render context
 let trace capture log_trace
 let stack capture log_stack error.stack
 let backtrace capture log_backtrace error.stack map
 let history get_history

 ret obj message title context trace stack backtrace history
end
