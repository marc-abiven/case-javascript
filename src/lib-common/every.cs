fn every x:arr y:fn
 //~ check is_arr x
 //~ check is_fn y

 forof x
  if not y v
   ret false
 end

 ret true
end
