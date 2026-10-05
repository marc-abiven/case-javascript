fn tbl_index tbl:arr
 let a dup tbl

 clear tbl

 for a
  let n inc i
  let v obj_unshift v "#" n

  push tbl v
 end
end
