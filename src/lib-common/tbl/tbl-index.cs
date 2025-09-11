fn tbl_index x:arr
 //~ check is_arr x

 let a dup x

 clear x

 for a
 //~ forin a
  //~ let i to_i k
  //~ let v at a i
  let n inc i
  let v obj_unshift v "#" n

  push x v
 end
end
