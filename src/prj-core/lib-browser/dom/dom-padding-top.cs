fn dom_padding_top node:obj value
 if is_undef value
  ret node.style.paddingTop

 check is_cool value

 assign node.style.paddingTop value
end
