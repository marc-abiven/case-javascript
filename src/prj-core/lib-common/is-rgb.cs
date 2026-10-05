fn is_rgb x
 if is_uint x.r
  if is_uint x.g
   if is_uint x.b
    ret true
  end
 end

 ret false
end