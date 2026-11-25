fn drop x:arr y
 if is_undef y
  ret drop x 1

 check is_uint y
 check lte y x.length

 pop x y
end
