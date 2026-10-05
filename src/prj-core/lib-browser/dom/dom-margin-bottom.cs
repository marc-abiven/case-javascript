fn dom_margin_bottom node:obj value
 if is_undef value
  ret node.style.marginBottom

 check is_cool value

 assign node.style.marginBottom value
end
