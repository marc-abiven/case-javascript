fn chan_plot x:arr y:num z:num a:num
 check gte y 0
 check gte z 0
 check gte a 0

 //find scale y

 fn find_scale_y x:arr
  var min front x
  var max min

  for x
   if gt v max
    assign max v

    brk
  end

  for x
   if lt v min
    assign min v
   elseif gt v max
    assign max v
  end

  ret obj  min max
 end

 //main

 let r arr

 if is_empty x
  ret r

 var scale_x y

 if lt x.length a
  assign scale_x div scale_x a
 else
  assign scale_x div scale_x x.length

 let scale find_scale_y x
 var scale_y sub scale.max scale.min

 check gte scale_y 0

 if different scale_y 0
  assign scale_y div z scale_y

 let chan x

 for chan
  let x mul i scale_x
  let x trunc x
  let y sub v scale.min
  let y mul y scale_y
  let y trunc y
  let o obj x y

  if is_empty r
   push r o

   cont
  end

  let last back r

  if same o.x last.x
   let n add o.y last.y
   let n div n 2
   let n trunc n

   assign last.y n
  else
   push r o
 end

 ret r
end
