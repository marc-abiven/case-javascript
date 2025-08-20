fn insert x y z:etc
 check is_arr x
 check is_uint y
 check between y 0 x.length

 x.splice y 0 z:etc
end