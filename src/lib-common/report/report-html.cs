fn report_html report:obj length human
 if is_def length
  check is_uint length

 var txt report_render report human

 if is_def length
  assign txt txt_cut txt length

 let html h_html
 let head h_head

 let title h_title report.title

 let body h_body

 h_font_family body font_family
 h_font_size body font_size

 let pre h_pre txt

 h_push body pre
 h_push head title
 h_push html head
 h_push html body

 let s h_render html

 ret s
end