fn tbl_sort x:arr column:str
 //compare

 fn compare x:obj y:obj
  let left get x column
  let right get y column

  ret cmp left right
 end

 //main

 sort x compare
end
