fn dom_remove_column x:obj y:str
 check same x.localName "table"

 for dom_children x
  let children dom_children v

  for children
   let column dom_data_get v "column"

   if same column y
    dom_remove v
    brk
   end
  end
 end
end
