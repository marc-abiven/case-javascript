fn limit_complexity x:def limit:uint
 //visit

 var complexity 0

 fn visit x
  if is_undef x
   check same arguments.length 1

  assign complexity inc complexity

  //array

  if is_arr x
   let r arr

   for x
    let v visit v

    push r v

    if gte complexity limit
     ret r
   end

   ret r
  end

  //object

  if is_obj x
   let r obj

   forin x
    let k visit k
    let v visit v

    put r k v

    if gte complexity limit
     ret r
   end

   ret r
  end

  //any

  ret value x
 end

 //main

 let x decycle x

 ret visit x
end