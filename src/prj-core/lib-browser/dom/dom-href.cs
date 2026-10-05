fn dom_href node:obj value
 if is_undef value
  ret node.href

 check is_str value

 assign node.href value
end
