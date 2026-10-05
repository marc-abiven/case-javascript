fn shift x:arr y
 if is_undef y
  ret shift x 1

 check is_uint y
 check lte y x.length

 if same y 1
  let r front x

  remove x 0 1

  ret value r
 end

 remove x 0 y
end
