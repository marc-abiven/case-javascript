fn count x:composite y:def
 //string

 if is_str x
  check is_str y

  let a split x y

  ret dec a.length
 end

 //array

 if is_arr x
  var r 0

  for x
   if same v y
    assign r inc r
  end

  ret r
 end
 
 //object
 
 if is_obj x
  var r 0
  
  forin x
   if same v y
    assign r inc r
   end
  end
  
  ret r
 end

 //any

 stop
end
