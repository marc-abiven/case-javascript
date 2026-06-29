fn cpl_parse_error cpl:obj path:str err:str
 let s txt_compact err
 let lines split s
 let stack arr

 //parse (node:line) message

 let line front lines

 if match line "(node:*) *"
  let parts split line " "
  let node shift parts
  let message join parts " "

  shift lines

  //copy the message to the stack

  push stack message
 else
  //parse path:line

  let parts split line ":"
  let line_js pop parts
  let line_js to_uint line_js
  let script join parts ":"

  //skip the carret

  shift lines 3

  //skip blank line

  let line front lines

  if is_blank line
   shift lines

  //a valid script

  if not match_l script "node:"
   //message

   flower_box "An error has been detected"

   let line line_js
   let o obj line script

   assign o.script path_shorten script

   let t to_tbl o
   let s tbl_render t

   log s

   //invalid line

   check lte line_js cpl.out.length

   //invalid script

   check contain script path

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
  end

  //copy the message to the stack

  let s shift lines

  push stack s
 end

 //filter stack

 while is_full lines
  let s shift lines
  let s trim s

  if not match_l s "at" //can be "Thrown at"
   brk

  push stack s
 end

 //report

 let stack join stack
 let map cpl_source_map cpl
 let report report_init stack undefined map

 report_log report
end