fn head x:vec y:uint
 if lt x.length y
  if is_str x
   ret x
  elseif is_arr x
   ret dup x
  else
   stop
 end

 ret slice_l x y
end
