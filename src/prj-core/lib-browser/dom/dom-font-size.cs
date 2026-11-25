fn dom_font_size node:obj value
 if is_undef value
  ret node.style.fontSize

 check is_str value

 assign node.style.fontSize value
end
