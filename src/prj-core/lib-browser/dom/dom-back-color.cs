fn dom_back_color node:obj value
 if is_undef value
  ret node.style.backgroundColor

 check is_str value

 assign node.style.backgroundColor value
end
