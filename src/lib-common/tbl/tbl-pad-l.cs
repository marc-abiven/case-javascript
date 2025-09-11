fn tbl_pad_l x:arr y:str z
 //~ check is_arr x
 //~ check is_str y

 if is_undef z
  var length 0

  forof x
   var cell get v y

   if not is_str cell
    assign cell json_encode cell

   assign length max length cell.length
  end

  ret tbl_pad_l x y length
 end

 forof x
  let cell get v y
  let cell pad_l cell " " z

  log y
  dump cell

  set v y cell
 end
end
