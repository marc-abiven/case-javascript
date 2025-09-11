fn pad_r x:cool y z
 //~ check is_cool x

 if is_uint x
  let s to_json x

  if is_undef y
   if is_undef z
    ret pad_r s "0" 3

   ret pad_r s "0" z
  end

  ret pad_r s y z
 end

 check is_str x
 check is_str y
 check is_uint z

 ret x.padEnd z y
end
