fn is_ushort x
 if not is_uint x
  ret false

 ret lt x ushort_max
end
