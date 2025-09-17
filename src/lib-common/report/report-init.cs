fn report_init error query map

 if is_str error
  let stack error
  let lines split error
  let message front lines
  let errno null
  let error obj stack message errno
  
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

 fn log_browser
  let location to_str location
  var referrer null

  if is_full document.referrer
   let url_referer url_parse document.referrer
   let url_location url_parse location

   if different url_referer.host url_location.host
    assign referrer document.referrer
  end

  let browser browser_get
  let agent navigator.userAgent
  let uptime time_now
  let uptime time_delay uptime
  let o obj location referrer browser agent uptime
  let t to_tbl o
  let s tbl_render t

  log s
 end

 fn log_server
  let url query.url.href
  let headers query.request.headers
  var referrer null

  if has headers "referrer"
   assign referrer get headers "referrer"
  elseif has headers "referer"
   assign referrer get headers "referer"

  let remote query.remote
  let uptime time_now
  let uptime time_delay uptime
  let o obj url referrer remote uptime
  let t to_tbl o
  let s tbl_render t

  log s
 end

 fn log_trace
  if is_empty traces
   ret

  flower "trace"

  forof traces
   log ">" v
  end
 end

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

 let stack error.stack
 let message error.message
 let type error.constructor.name
 let type to_lower type
 let title arr app 
 
 if same type "error"
 if same type "object"
 else
  push title type
 
 push title message
 
 if is_browser
  push title location.hostname
 elseif is_node
  let errno error.errno

  if is_undef errno
  elseif is_null errno
  elseif same errno 0
  else
   let errno concat "errno=" errno
   
   push title errno
  end
  
  let host os_host
  
  push title host
 else
  stop

 let title join title " / "
 var browser ""
 var server ""
 let cs capture dbg_origin_xs stack "cs" map
 let backtrace capture log_backtrace stack map
 let js capture dbg_origin_xs stack "js" map

 var empty true

 if is_browser
  assign browser capture log_browser

  assign empty false
 end

 if is_obj query
  assign server capture log_server

  assign empty false
 end

 if is_full trace
  assign empty false

 if is_full cs
  assign empty false

 if is_full backtrace
  assign empty false

 if gt verbose 0
  if is_full js
   assign empty false

 if empty
  trace "No error stack."

 let trace capture log_trace

 ret obj title app message browser server trace cs backtrace js
end
