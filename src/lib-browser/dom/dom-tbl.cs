fn dom_tbl x:arr
 //~ check is_arr x

 let table dom_table
 let trs arr

 fn table_save_rows x:obj
  //~ check is_obj x

  let a dom_children x
  let a dom_clone a

  shift a
  append trs a
 end

 fn table_clear x:obj
  //~ check is_obj x

  let children dom_children x

  shift children

  forof children
   dom_remove v
  end
 end

 fn td_compare x:uint y:obj z:obj
  //~ check is_uint x
  //~ check is_obj y
  //~ check is_obj y

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

 let ascending "▲"
 let descending "▼"

 fn on_click x:obj y:obj
  //~ check is_obj x
  //~ check is_obj y

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

  forof siblings
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
   let td_compare partial td_compare index

   sort trs td_compare
   dom_append table trs

   if same value "#"
    dom_text x ascending
   else
    let s space value ascending

    dom_text x s
   end
  elseif same order "descending"
   let index dom_index x
   let td_compare partial td_compare index

   sort trs td_compare
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

 fn on_mouse_over x:obj y:obj
  //~ check is_obj x
  //~ check is_obj y

  dom_pointer x
 end

 dom_class table "grid"

 let tr dom_tr
 let columns tbl_columns x

 for columns
 //~ forin columns
  //~ let i to_i k
  //~ let v at columns i
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

 for x
 //~ forin x
  //~ let i to_i k
  //~ let v at x i
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

   var text null

   if is_cool v
    dom_text td v
   elseif is_link v
    let a link_render v

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
