fn dom_remove_column node:obj column:str
 check same node.localName "table"

 for dom_children node
  let children dom_children v

  for children
   let s dom_data_get v "column"

   if same s column
    dom_remove v

    brk
   end
  end
 end
end
