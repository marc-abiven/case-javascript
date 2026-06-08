fn tbl_remove_column x:arr y:str
 let t dup x

 clear x

 for t
  let v obj_remove v y

  push x v
 end
end
