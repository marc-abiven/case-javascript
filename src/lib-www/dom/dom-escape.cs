fn dom_escape x:str
 let a arr

 for x
  let entity find entities v

  if same entity -1
   push a v
  else
   push a entity
  end
 end

 ret implode a
end