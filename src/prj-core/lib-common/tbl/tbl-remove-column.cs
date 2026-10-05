fn tbl_remove_column tbl:arr column:str
 let t dup tbl

 clear tbl

 for t
  let v obj_remove v column

  push tbl v
 end
end
