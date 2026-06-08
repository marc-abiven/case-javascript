fn tbl_sort x:arr column:str
 //compare

 fn compare x:obj y:obj
  let x get x column
  let y get y column

  ret cmp_i18n x y
 end

 //main

 sort x compare
end