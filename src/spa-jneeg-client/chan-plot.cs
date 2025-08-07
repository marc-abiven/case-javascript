fn chan_plot x y z a
 check is_arr x
 check is_num y
 check is_num z
 check is_num a
 check gte y 0
 check gte z 0
 check gte a 0
 
 fn find_scale_y x
  check is_arr x
  
  var min front x
  var max min
  
  forof x
   if gt v max
    assign max v
    
    brk
  end

  forof x
   if lt v min
    assign min v
   elseif gt v max
    assign max v
  end
  
  ret obj  min max
 end

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
 
 forin chan
  let i to_i k
  let v at chan i
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
