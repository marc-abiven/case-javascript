//stringify a cell

fn tbl_cell x:def
 //string

 if is_str x
  var r trim_r x

  if is_txt r
   assign r json_encode r //show cr and lf
   assign r dequote r
  end

  ret r
 end

 //any

 let s to_dump x
 
 ret txt_inline s
end
