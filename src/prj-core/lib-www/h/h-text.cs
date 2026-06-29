fn h_text x:obj y
 if is_undef y
  ret x.text

 if is_bool y
  assign x.text json_encode y
 elseif is_null y
  assign x.text json_encode y
 elseif is_num y
  assign x.text json_encode y
 elseif is_str y
  assign x.text y
 else
  stop
end
