fn dom_color node:obj value
 if is_undef value
  ret node.style.color

 check is_str value

 assign node.style.color value
end
