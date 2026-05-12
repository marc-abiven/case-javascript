fn h_tbl tbl:arr
 //header

 let table h_table

 h_border table

 let tr h_tr

 for tbl_columns tbl
  let th h_th

  h_text th v
  h_padding th padding
  h_border th
  h_push tr th
 end

 h_push table tr

 //content

 for tbl
  let tr h_tr
  let row v

  let even mod i 2
  let even same even 0

  if even
   h_back_color tr "whitesmoke"
  else
   h_back_color tr "white"

  forin row
   let v get row k
   let td h_td

   if is_cool v
    h_text td v
   elseif is_link v
    let a link_h v

    h_push td a
   else
    stop

   h_padding td padding
   h_push tr td
  end

  h_push table tr
 end

 ret table
end
