fn cpl_log_error cpl path err
 check is_obj cpl
 check is_str path
 check is_str err

 fn process cpl path err
  check is_obj cpl
  check is_str path
  check is_str err

  let s txt_compact err
  let a split s
  let line_js shift a
  let line_js split line_js ":"
  let line_js back line_js
  let line_js to_uint line_js

  shift a 3

  let message shift a

  flower message

  let line line_js
  let o obj line path
  let t to_tbl o
  let s tbl_render t

  log s

  if gt line_js cpl.out.length
   ret true

  let index dec line_js
  let o at cpl.out index
  let source o.source
  let src path_concat "src" source.path
  let content file_read src
  let content cpl_uncomment cpl content
  let content split content
  let line_cs inc source.index
  let s dbg_origin content line_cs ""
  let s tbl_render s

  log s

  let content dbg_source path
  let content split content
  let s dbg_origin content line_js ""
  let s tbl_render s

  log s

  ret true
 end

 try
  ret process cpl path err
 catch e
  let report report_init e

  flower report.title

  log report.backtrace

  ret false
 end
end