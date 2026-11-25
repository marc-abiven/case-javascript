fn tbl_sort tbl:arr column:str
 //compare

 fn compare x:obj y:obj
  let x get x column
  let y get y column

  ret cmp_i18n x y
 end

 //main

 sort tbl compare
end
