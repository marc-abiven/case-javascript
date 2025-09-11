fn slice_r x:vec y:uint
 //~ check is_vec x
 //~ check is_uint y

 let n sub x.length y

 ret slice x n y
end
