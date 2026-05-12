fn base36_decode x:str
 var r ""
 let a explode x

 while is_full a
  let a2 slice_l a 4

  shift a 4

  let s implode a2
  let n Number.parseInt s 36
  let range mul 256 256

  check is_uint n
  check lte n range

  let c chr n

  assign r concat r c
 end

 ret r
end
