fn drop x y
 check is_arr x

 if is_undef y
  ret drop x 1

 check is_uint y
 check lte y x.length

 pop x y
end
