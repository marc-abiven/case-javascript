fn every x:arr y:fn
 forof x
  if not y v
   ret false
 end

 ret true
end
