fn dom_margin node:obj value
 if is_undef value
  ret node.style.margin

 check is_cool value

 assign node.style.margin value
end
