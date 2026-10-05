fn dom_text node:obj value
 if is_undef value
  ret node.textContent

 check is_cool value

 assign node.textContent value
end
