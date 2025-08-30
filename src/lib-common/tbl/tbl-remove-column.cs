fn tbl_remove_column x y
 check is_arr x
 check is_str y

 let t dup x

 clear x

 forof t
  let v obj_delete v y

  push x v
 end
end