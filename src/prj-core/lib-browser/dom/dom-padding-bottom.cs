fn dom_padding_bottom node:obj value
 if is_undef value
  ret node.style.paddingBottom

 check is_cool value

 assign node.style.paddingBottom value
end
