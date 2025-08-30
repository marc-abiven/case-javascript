fn slice_r x y
 check is_vec x
 check is_uint y

 let n sub x.length y

 ret slice x n y
end