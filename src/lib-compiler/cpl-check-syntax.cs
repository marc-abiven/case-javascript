fn cpl_check_syntax x y
 check is_obj x
 check is_str y

 let node process.argv0 
 let o os_run node "--trace-uncaught" "--check" y
 
 if same o.status 0
  ret true
 
 let a split o.out
 let line_js shift a
 let line_js split line_js ":"
 let line_js back line_js
 let line_js to_uint line_js
 
 shift a 3
 
 let message shift a
 
 flower message

 log "line" line_js
 
 let s to_lit y
 
 log "path" s
 
 let index dec line_js
 let o at x.out index
 let source o.source
 let path path_concat "src" source.path
 let content file_read path
 let content cpl_uncomment x content
 let content split content
 let line_cs inc source.index 
 let s dbg_origin content line_cs ""
 let s tbl_render s
 
 log s
 
 let content dbg_source y 
 let content split content 
 let s dbg_origin content line_js ""
 let s tbl_render s
 
 log s
 
 ret false
end
