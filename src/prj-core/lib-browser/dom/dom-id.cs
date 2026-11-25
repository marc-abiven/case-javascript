fn dom_id node:obj value
 if is_undef value
  ret node.id

 check is_str value

 assign node.id value
end
