fn tbl_index x:arr
 let a dup x

 clear x

 for a
  let n inc i
  let v obj_unshift v "#" n

  push x v
 end
end
