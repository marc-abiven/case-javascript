//cson encode

fn cson_encode x:def
 //stringify key

 fn stringify_key x:str
  if is_numeric x
   ret x

  if is_name x
   ret x

  if is_lisp x
   ret x

  ret to_lit x
 end

 //stringify value

 fn stringify_value x:def
  if is_container x
   ret cson_encode x

  if is_value x
   ret to_json x

  if is_name x
   ret x

  if is_lisp x
   ret x

  if is_str x
   ret to_lit x

  stop
 end

 //is value

 fn is_value x
  if is_null x
   ret true

  if is_bool x
   ret true

  if is_num x
   ret true

  ret false
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
    let v get x k

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
