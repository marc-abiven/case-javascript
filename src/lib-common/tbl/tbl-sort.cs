fn tbl_sort x:arr column:str compare
 if is_undef compare
  ret tbl_sort x column cmp
 
 //compare cell

 fn compare_cell x:obj y:obj
  let left get x column
  let right get y column

  ret compare left right
 end

 //main

 sort x compare_cell
end
