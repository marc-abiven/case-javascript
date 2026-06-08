fn is_uint32 x
 if not is_uint x
  ret false

 ret lt x uint32_max
end
