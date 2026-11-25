fn dom_class node:obj value
 if is_undef value
  ret node.className

 check is_str value

 assign node.className value
end
