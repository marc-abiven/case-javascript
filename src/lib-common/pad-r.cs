fn pad_r x:cool padding length
 if is_uint x
  let s to_json x

  if is_undef padding
   if is_undef length
    ret pad_r s "0" 3

   ret pad_r s "0" length
  end

  ret pad_r s padding length
 end

 check is_str x
 check is_str padding
 check is_uint length

 ret x.padEnd length padding
end
