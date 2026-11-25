fn dom_attr node:obj key:str value
 if is_undef value
  ret node.getAttribute key

 check is_cool value

 node.setAttribute key value
end
