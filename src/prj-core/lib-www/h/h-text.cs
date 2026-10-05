fn h_text node:obj value
 if is_undef value
  ret node.text

 //string

 if is_str value
  assign node.text value

  ret
 end

 //scalar

 if is_scalar value
  assign node.text json_encode value

  ret
 end

 //any

 stop
end
