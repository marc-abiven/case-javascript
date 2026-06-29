fn slice x:vec index:uint length
 check lte index x.length

 if is_undef length
  let n sub x.length index

  ret slice x index n
 end

 check is_uint length
 check lte length x.length
 check lte index x.length

 let n add index length

 check lte n x.length

 let r x.slice index n

 check same r.length length

 ret r
end
