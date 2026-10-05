fn h_border node:obj value
 if is_undef value
  let style space border "solid gainsboro" //global

  ret h_border node style
 end

 check is_str value

 h_style node "border" value
end
