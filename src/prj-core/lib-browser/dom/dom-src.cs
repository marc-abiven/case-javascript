fn dom_src node:obj value
 if is_undef value
  ret node.src

 check is_str value

 assign node.src value
end
