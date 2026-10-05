gn server_dispatch server:obj query:obj
 //match on

 fn match_on host path
  let r select_on host path

  if is_obj r
   ret r

  let r select_on host "any"

  if is_obj r
   ret r

  let r select_on "any" path

  if is_obj r
   ret r

  let r select_on "any" "any"

  if is_obj r
   ret r

  stop
 end

 //select on

 fn select_on host path
  for server.ons
   if contain host v.host
    if same v.path path
     ret v
   end
  end

  ret null
 end

 //main

 let host query.host
 let url query.url
 let method query.method
 let remote query.remote
 let request query.request
 let response query.response
 let path url.path
 let on match_on host path
 let handler value on.on
 let from concat host ":" path
 let to concat on.host ":" on.path
 let o obj from to
 let s obj_option o

 log "dispatch" s

 let context obj server host url method remote request response
 var result null
 var error null

 try
  if is_fn handler
   assign result handler context
  elseif is_gn handler
   assign result run handler context
  else
   stop
 catch e
  assign error e
 end

 if is_obj error
  //the server continues to live after an error
  //the error is displayed and reported by mail

  //report context

  let url query.url.href
  let remote query.remote
  let context obj url remote
  let headers query.request.headers

  //referrer

  var referrer null

  if has headers "referrer"
   assign referrer get headers "referrer"
  elseif has headers "referer"
   assign referrer get headers "referer"

  if is_str referrer
   put context "referrer" referrer

  //report

  let report report_init error context

  report_log report

  if is_remote
   report_mail report

  assign result report_html report
 else
  check is_str result

 response.end result
end
