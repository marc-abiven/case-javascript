fn dom_margin_left node:obj value
 if is_undef value
  ret node.style.marginLeft

 check is_cool value

 assign node.style.marginLeft value
end
