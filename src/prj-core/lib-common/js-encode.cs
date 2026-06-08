fn js_encode x:def
 if is_null x
  //null

  ret to_str x
 elseif is_bool x
  //bool

  ret to_str x
 elseif is_num x
  //number

  ret to_str x
 elseif is_str x
  //string

  ret to_lit x
 elseif is_arr x
  //array

  let a arr

  for x
   let value js_encode v

   push a value
  end

  let s join a ","
  let s bracket s

  ret s
 elseif is_obj x
  //object

  let a arr

  forin x
   let v get x k

   //key

   var key k

   if is_numeric key //preserve numeric keys
   else
    assign key to_lit key

   //value

   let value js_encode v

   //pair

   let pair concat key ":" value

   push a pair
  end

  let s join a ","
  let s brace s

  ret s
 else
  stop
end