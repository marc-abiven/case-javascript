fn dom_rename_column node:obj column:str replace:str
 check same node.localName "table"

 for dom_children node
  check same v.localName "tr"

  let children dom_children v

  for children
   let s dom_data_get v "column"

   if same s column
    dom_data_set v "column" replace

    if same v.localName "th"
     dom_data_set v replace
     dom_text v replace
    end
   end
  end
 end
end
