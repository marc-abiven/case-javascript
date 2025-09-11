fn dom_index x:obj
 let siblings dom_children x.parentElement

 for siblings
 //~ forin siblings
  //~ let i to_i k
  //~ let v at siblings i

  if same v x
   ret i
 end

 stop
end
