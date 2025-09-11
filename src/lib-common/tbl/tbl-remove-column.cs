fn tbl_remove_column x:arr y:str
 //~ check is_arr x
 //~ check is_str y

 let t dup x

 clear x

 forof t
  let v obj_remove v y

  push x v
 end
end
