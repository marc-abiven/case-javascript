fn dom_column node:obj column:str
 check same node.localName "tr"

 for dom_children node
  let s dom_data_get v "column"

  if same s column
   ret v
 end
end
