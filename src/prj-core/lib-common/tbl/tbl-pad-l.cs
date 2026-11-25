fn tbl_pad_l tbl:arr column:str length
 //compute the length

 if is_undef length
  var length column.length

  for tbl
   var cell get v column

   if not is_str cell
    assign cell cell_encode cell

   assign length max length cell.length
  end

  ret tbl_pad_l tbl column length
 end

 //pad

 let a dup tbl

 clear tbl

 for a
  let key pad_l column " " length

  let value get v column
  let value pad_l value " " length

  let o obj

  forin v
   if same k column
    set o key value
   else
    set o k v
  end

  push tbl o
 end
end
