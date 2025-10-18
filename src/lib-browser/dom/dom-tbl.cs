fn dom_tbl tbl:arr
 //table save

 let table dom_table
 let trs arr

 fn table_save_rows x:obj
  let a dom_children x
  let a dom_clone a

  shift a
  append trs a
 end

 //table clear

 fn table_clear x:obj
  let children dom_children x

  shift children

  for children
   dom_remove v
  end
 end

 //compare td

 fn compare_td x:uint y:obj z:obj
  let left dom_children y
  let left at left x
  let left dom_data_get left

  let right dom_children z
  let right at right x
  let right dom_data_get right

  if is_num left
   if is_num right
    ret cmp left right
  end

  let left unaccent left
  let left to_lower left

  let right unaccent right
  let right to_lower right

  ret cmp left right
 end

 //on click

 let ascending "▲"
 let descending "▼"

 fn on_click x:obj y:obj
  var order null
  let data_order dom_data_get x "order"

  if same data_order "none"
   assign order "ascending"
  elseif same data_order "ascending"
   assign order "descending"
  elseif same data_order "descending"
   assign order "none"
  else
   stop

  let siblings x.parentElement
  let siblings dom_children siblings

  for siblings
   let text dom_data_get v

   dom_text v text
  end

  table_clear table

  let trs dom_clone trs
  let value dom_data_get x

  if same order "none"
   dom_append table trs

   let text dom_data_get x

   dom_text x text
  elseif same order "ascending"
   let index dom_index x
   let compare_td partial compare_td index

   sort trs compare_td
   dom_append table trs

   if same value "#"
    dom_text x ascending
   else
    let s space value ascending

    dom_text x s
   end
  elseif same order "descending"
   let index dom_index x
   let compare_td partial compare_td index

   sort trs compare_td
   reverse trs
   dom_append table trs

   if same value "#"
    dom_text x descending
   else
    let s space value descending

    dom_text x s
   end
  else
   stop

  dom_data_set x "order" order
 end

 //on mouse over

 fn on_mouse_over x:obj y:obj
  dom_pointer x
 end

 //main

 //header

 dom_class table "grid"

 let tr dom_tr

 for tbl_columns tbl
  let th dom_th

  dom_data_set th v
  dom_data_set th "column" v
  dom_data_set th "order" "none"

  let on_click on on_click
  let on_click partial on_click th

  let on_mouse_over on on_mouse_over
  let on_mouse_over partial on_mouse_over th

  assign th.onclick value on_click
  assign th.onmouseover value on_mouse_over

  dom_text th v
  dom_push tr th
 end

 dom_push table tr

 //content

 for tbl
  let tr dom_tr
  let row v

  let even mod i 2
  let even same even 0

  if even
   dom_class tr "even"
  else
   dom_class tr "odd"

  forin row
   let v get row k
   let td dom_td

   dom_data_set td v
   dom_data_set td "column" k

   if is_cool v
    dom_text td v
   elseif is_link v
    let a link_dom v

    dom_push td a
   else
    stop

   dom_push tr td
  end

  dom_push table tr
 end

 time_timeout table_save_rows 0 table

 ret table
end
