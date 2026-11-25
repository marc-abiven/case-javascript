fn dom_border node:obj value
 if is_undef value
  ret dom_border node "var(--border) solid gainsboro"

 check is_str value

 assign node.style.border value
end
