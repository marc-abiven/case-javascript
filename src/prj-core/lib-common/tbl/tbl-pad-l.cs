fn tbl_pad_l tbl:arr column:str length
 if is_undef length
  var length 0

  for x
   var cell get v column

   if not is_str cell
    assign cell json_encode cell

   assign length max length cell.length
  end

  ret tbl_pad_l tbl column length
 end

 for x
  let cell get v column
  let cell pad_l cell " " length

  set v y cell
 end
end
