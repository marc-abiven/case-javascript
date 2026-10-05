fn dom_margin_right node:obj value
 if is_undef value
  ret node.style.marginRight

 check is_cool value

 assign node.style.marginRight value
end
