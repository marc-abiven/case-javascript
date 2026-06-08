fn report_init error query map
 if is_str error
  //make a shim of the error

  let stack error
  let lines split error
  let message front lines
  let error obj stack message

  ret report_init error query map
 end

 check is_obj error

 if is_def query
  check is_obj query

 if is_undef map
  let map dbg_source_map

  ret report_init error query map
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
  dbg_origin_xs stack "cs" map
 end

 //log backtrace

 fn log_backtrace stack:str map:obj
  let backtrace dbg_backtrace stack map

  if is_empty backtrace
   ret

  tbl_remove_column backtrace "njs"
  tbl_remove_column backtrace "js"

  let backtrace tbl_render backtrace
  let backtrace txt_prepend backtrace "> "

  flower "backtrace"
  log backtrace
 end

 //log js

 fn log_js stack:str
  dbg_origin_xs stack "js" map
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

 put context "app" app

 //type

 let type error.constructor.name
 let type to_lower type

 if same type "error"
 if same type "object"
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

  //referrer

  var referrer null

  if is_full document.referrer
   let url_referer url_parse document.referrer
   let url_location url_parse context.location

   if different url_referer.host url_location.host
    put context "referrer" document.referrer
  end

  //browser name

  let browser browser_get

  put context "browser" browser

  //agent

  put context "agent" navigator.userAgent

  //no query

  check is_undef query
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

  //query

  if is_obj query
   //url

   put context "url" query.url.href

   //referrer

   let headers query.request.headers
   var referrer null

   if has headers "referrer"
    assign referrer get headers "referrer"
   elseif has headers "referer"
    assign referrer get headers "referer"

   if is_str referrer
    put context "referrer" referrer

   //remote

   put context "remote" query.remote
  end
 else
  stop

 //error properties

 forin error
  let v get error k
  let skip arr "message" "stack" "errno"

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
 let context tbl_render context
 let trace capture log_trace
 let stack capture log_stack error.stack
 let backtrace capture log_backtrace error.stack map
 let js capture log_js error.stack

 ret obj message title context trace stack backtrace js
end