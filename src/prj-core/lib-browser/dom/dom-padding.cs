fn dom_padding node:obj value
 if is_undef value
  ret node.style.padding

 check is_cool value

 assign node.style.padding value
end
