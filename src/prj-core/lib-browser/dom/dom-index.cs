fn dom_index node:obj
 let siblings dom_children node.parentElement

 for siblings
  if same v node
   ret i
 end

 stop
end
