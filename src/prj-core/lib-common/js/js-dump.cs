fn js_dump x:def
 //internal trim

 fn internal_trim x:str
  let a arr

  for split x
   let s trim v

   push a s
  end

  ret implode a
 end

 //get key

 fn get_key key:cool
  if is_numeric key //preserve numeric keys
   ret to_str key

  if is_identifier key
   ret key

  ret to_lit key
 end

 //is inline

 fn is_inline x:str
  let a split x

  ret lte a.length 3 //open, close and a value
 end

 //main

 //scalar

 if is_scalar x
  ret json_encode x

 //array

 if is_arr x
  //empty

  if is_empty x
   ret "[]"

  //single

  if is_single x
   let value front x
   let value js_dump value

   if is_inline value
    let value internal_trim value
    let value bracket value

    ret value
   end
  end

  //many

  let a arr

  for x
   let value js_dump v
   let value txt_indent value

   push a value
  end

  let s join a ",\n"
  let s arr "[" s "]"
  let s join s

  ret s
 end

 //object

 if is_obj x
  //empty

  if is_empty x
   ret "{}"

  //single

  let keys obj_keys x
  let values obj_vals x

  if is_single keys
   let key front keys
   let key get_key key
   let value front values
   let value js_dump value

   if is_inline value
    let value internal_trim value
    let pair concat key ":" value
    let pair brace pair

    ret pair
   end
  end

  //many

  let a arr

  forin x
   let key get_key k
   let value js_dump v

   if is_ln value
    let pair concat " " key ":" value

    push a pair
   else
    let key concat " " key ":"
    let value txt_indent value
    let pair concat key "\n" value

    push a pair
   end
  end

  let s join a ",\n"
  let s arr "{" s "}"
  let s join s

  ret s
 end

 //any

 stop
end
