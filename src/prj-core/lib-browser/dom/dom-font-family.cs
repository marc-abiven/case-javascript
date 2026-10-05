fn dom_font_family node:obj value
 if is_undef value
  ret node.style.fontFamily

 check is_str value

 assign node.style.fontFamily value
end
