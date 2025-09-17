fn pop x:arr y
 if is_undef y
  ret pop x 1

 check is_uint y
 check lte y x.length

 let n sub x.length y

 if same y 1
  let r back x

  remove x n 1

  ret value r
 end

 remove x n y
end
