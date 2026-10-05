//remove duplicate references and normalize exotic values

fn decycle x
 if is_undef x
  check same arguments.length 1

 //is arr like

 fn is_arr_like x
  if not is_arr x
   ret false

  forin x
   if not is_numeric k //array with text keys like an object
    ret true
  end

  ret false
 end

 //visit

 let history arr

 fn visit x
  if contain history x
   ret null

  if is_container x
   push history x

  //array like

  if is_arr_like x
   let r arr

   forin x
    let v visit v

    if is_numeric k
     push r v
    else
     let key k
     let value v
     let o obj key value

     push r o
    end
   end

   ret r
  end

  //array

  if is_arr x
   let r arr

   for x
    let v visit v

    push r v
   end

   ret r
  end

  //buffer

  if is_buffer x
   ret x.toString "utf8"

  //instance

  if is_instance x
   let r obj

   for obj_properties x
    let k v
    let v get x k
    let v visit v

    put r k v
   end

   ret r
  end

  //object

  if is_obj x
   let r obj

   forin x
    let v visit v

    put r k v
   end

   ret r
  end

  //any

  ret value x
 end

 //main

 ret visit x
end
