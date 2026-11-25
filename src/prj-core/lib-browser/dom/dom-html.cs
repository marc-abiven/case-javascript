fn dom_html node:obj value
 if is_undef value
  ret node.innerHTML

 check is_str value

 assign node.innerHTML value
end
