fn dom_margin_top node:obj value
 if is_undef value
  ret node.style.marginTop

 check is_cool value

 assign node.style.marginTop value
end
