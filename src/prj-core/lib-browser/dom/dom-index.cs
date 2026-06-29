fn dom_index x:obj
 let siblings dom_children x.parentElement

 for siblings
  if same v x
   ret i
 end

 stop
end
