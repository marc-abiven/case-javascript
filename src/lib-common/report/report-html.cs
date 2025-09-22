fn report_html report:obj length human
 if is_def length
  check is_uint length

 var txt report_render report human

 if is_def length
  assign txt txt_cut txt length

 let style concat "font-family:" font_family ";font-size:" font_size
 let style to_lit style
 let body_open concat "<body style=" style ">"

 let pre concat "<pre>" txt "</pre>"

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
