fn remove x:arr y:uint z
 if is_undef z
  ret remove x y 1

 check is_uint z
 check between y 0 x.length

 let n add y z

 check between n 0 x.length

 x.splice y z
end
