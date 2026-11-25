fn tbl_column tbl:arr column:str
 check is_arr tbl
 check is_str column

 let r arr

 for tbl
  let s get v column

  push r s
 end

 ret r
end
