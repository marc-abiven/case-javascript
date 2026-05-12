fn cpl_log_error cpl:obj err:str path
 if is_undef path
  ret cpl_log_error cpl err cpl.target

 check is_str path

 //parse error

 fn parse_error cpl:obj path:str err:str
  //message

  let s txt_compact err
  let lines split s

  let script shift lines
  let script split script ":"
  let line_js pop script
  let line_js to_uint line_js
  let script join script ":"

  shift lines 3

  let message front lines

  flower_box message

  let line line_js
  let o obj line script
  let t to_tbl o
  let s tbl_render t

  log s

  //invalid line

  if gt line_js cpl.out.length
   ret

  //invalid path

  if not contain script path
   ret

  let index dec line_js
  let o at cpl.out index
  let source o.source

  //context cs

  let content cpl_uncomment cpl source.path
  let content split content
  let line_cs inc source.index
  let s dbg_origin content line_cs ""
  let s tbl_render s

  log s

  //context js

  let content dbg_source path
  let content split content
  let s dbg_origin content line_js ""
  let s tbl_render s

  log s

  //filter stack

  let stack arr
  let s shift lines

  push stack s

  while is_full lines
   let s shift lines
   let s trim s

   if not match_l s "at"
    brk

   push stack s
  end

  //report

  let stack join stack
  let map cpl_source_map cpl
  let report report_init stack undefined map

  report_log report

  ret
 end

 //main

 try
  parse_error cpl path err
 catch e
  ret false
 end

 ret true
end