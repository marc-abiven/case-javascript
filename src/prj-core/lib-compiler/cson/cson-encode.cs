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

  if is_scalar x
   ret json_encode x

  if is_name x
   ret x

  if is_lisp x
   ret x

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
