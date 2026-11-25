fn cson_encode x:def
 //stringify key

 fn stringify_key x:str
  //numeric

  if is_numeric x
   ret x

  //name

  if is_name x
   ret x

  //lisp

  if is_lisp x
   ret x

  //any

  ret to_lit x
 end

 //stringify value

 fn stringify_value x:def
  //name

  if is_name x
   ret x

  //lisp

  if is_lisp x
   ret x

  //scalar

  if is_scalar x
   ret json_encode x

  //container

  if is_container x
   ret cson_encode x

  //any

  stop
 end

 //main

 let a arr

 if is_arr x
  //array

  push a "arr"

  if is_full x
   for x
    //stringify

    let s stringify_value v
    let s txt_indent s

    push a s
   end

   push a "end"
  end
 elseif is_obj x
  //object

  push a "obj"

  if is_full x
   forin x
    //stringify

    let key stringify_key k
    let value stringify_value v

    let pair concat key " " value
    let pair txt_indent pair

    push a pair
   end

   push a "end"
  end
 else
  //value

  let s stringify_value x

  push a s
 end

 ret join a
end
