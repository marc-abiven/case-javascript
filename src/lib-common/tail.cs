fn tail x:vec y:uint
 if lt x.length y
  if is_str x
   ret x
  elseif is_arr x
   ret dup x
  else
   stop
 end

 ret slice_r x y
end
