fn dom_padding_left node:obj value
 if is_undef value
  ret node.style.paddingLeft

 check is_cool value

 assign node.style.paddingLeft value
end
