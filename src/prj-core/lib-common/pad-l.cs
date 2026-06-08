fn pad_l x:cool padding length
 if is_uint x
  let s to_json x

  if is_undef padding
   if is_undef length
    ret pad_l s "0" 3

   ret pad_l s "0" length
  end

  ret pad_l s padding length
 end

 check is_str x
 check is_str padding
 check is_uint length

 ret x.padStart length padding
end
