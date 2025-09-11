fn insert x:arr y:uint z:etc
 //~ check is_arr x
 //~ check is_uint y
 //~ check between y 0 x.length
 check lte y x.length

 x.splice y 0 z:etc
end
