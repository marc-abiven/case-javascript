gn server_route server:obj query:obj
 //match host

 fn match_host ons:obj host:str path:str components:arr
  if is_full components
   ret null

  forin ons
   let v get ons k
   let parts split k "_"
   let domain shift parts

   if not contain host domain
    cont

   if is_full parts
    cont

   ret value v
  end

  ret null
 end

 //match any

 fn match_any ons:obj host:str path:str components:arr
  if is_full components
   ret null

  forin ons
   let v get ons k
   let parts split k "_"
   let domain shift parts

   if different domain "any"
    cont

   if is_full parts
    cont

   ret value v
  end

  ret null
 end

 //match host path

 fn match_host_path ons:obj host:str path:str components:arr
  let components path_split path
  let components reject components is_empty

  if is_empty components
   ret null

  forin ons
   let v get ons k
   let parts split k "_"
   let domain shift parts

   if not contain host domain
    cont

   if neq components parts
    cont

   ret value v
  end

  ret null
 end

 //match host any

 fn match_host_any ons:obj host:str path:str components:arr
  let components path_split path
  let components reject components is_empty

  if is_empty components
   ret null

  forin ons
   let v get ons k
   let parts split k "_"

   if not is_pair parts
    cont

   let domain front parts
   let any at parts 1

   if not contain host domain
    cont

   if different any "any"
    cont

   ret value v
  end

  ret null
 end

 //match any path

 fn match_any_path ons:obj host:str path:str components:arr
  let components path_split path
  let components reject components is_empty

  if is_empty components
   ret null

  forin ons
   let v get ons k
   let parts split k "_"

   shift parts

   if neq components parts
    cont

   ret value v
  end

  ret null
 end

 //match any any

 fn match_any_any ons:obj host:str path:str components:arr
  let components path_split path
  let components reject components is_empty

  if is_empty components
   ret null

  forin ons
   let v get ons k
   let parts split k "_"

   if not is_pair parts
    cont

   let domain front parts
   let any at parts 1

   if different domain "any"
    cont

   if different any "any"
    cont

   ret value v
  end

  ret null
 end

 //main

 let ons server.ons
 let host query.host
 let url query.url
 let method query.method
 let remote query.remote
 let request query.request
 let response query.response
 let path url.path
 let components path_split path
 let components reject components is_empty
 let matches arr match_host match_any match_host_path match_host_any match_any_path match_any_any

 for matches
  let on v ons host path components

  if is_null on
   cont

  let name split on.name "_"

  shift name

  let name join name "-"

  log "on" name

  let context obj server host url method remote request response
  var result null
  var error null

  try
   if is_fn on
    assign result on context
   elseif is_gn on
    assign result run on context
   else
    stop
  catch e
   assign error e
  end

  if is_obj error
   let report report_init error query

   report_log report
   report_mail report

   assign result report_html report
  else
   check is_str result

  response.end result

  ret
 end

 stop
end