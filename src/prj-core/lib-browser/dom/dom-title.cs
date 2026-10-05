fn dom_title node:obj value
 if is_undef value
  ret node.title

 check is_cool value

 assign node.title value
end
