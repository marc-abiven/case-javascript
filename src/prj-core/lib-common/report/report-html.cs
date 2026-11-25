fn report_html report:obj length human
 if is_def length
  check is_uint length

 var s report_render report human

 if is_def length
  assign s txt_cut_r s length

 let html h_html
 let head h_head
 let title h_title report.message
 let body h_body

 h_font_family body font_family
 h_font_size body font_size

 let pre h_pre s

 h_push body pre
 h_push head title
 h_push html head
 h_push html body

 ret h_render html
end
