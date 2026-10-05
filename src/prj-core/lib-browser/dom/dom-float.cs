fn dom_float node:obj value
 if is_undef value
  ret dom_float node "left"

 check is_str value

 assign node.style.float value
end
