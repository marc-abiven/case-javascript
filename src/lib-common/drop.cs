fn drop x y
 check is_arr x

 if is_undef y
  ret drop x 1

 pop x y
end