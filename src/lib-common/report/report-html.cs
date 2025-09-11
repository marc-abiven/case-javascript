fn report_html report:obj length
 //~ check is_obj report

 if is_def length
  check is_uint length

 var pre report_render report

 if is_def length
  assign pre txt_cut pre length

 let style "font-family:monospace;font-size:1.1vw"
 let style to_lit style
 let body_open concat "<body style=" style ">"
 let pre concat "<pre>" pre "</pre>"
 let title concat "<title>" report.title "</title>"
 let html arr

 push html "<!doctype html>"
 push html "<html>"
 push html "<head>"
 push html title
 push html "</head>"
 push html body_open
 push html pre
 push html "</body>"
 push html "</html>"

 ret join html
end
