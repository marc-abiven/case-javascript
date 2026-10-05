fn dom_padding_right node:obj value
 if is_undef value
  ret node.style.paddingRight

 check is_cool value

 assign node.style.paddingRight value
end
