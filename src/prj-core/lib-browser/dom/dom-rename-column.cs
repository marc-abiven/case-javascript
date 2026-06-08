fn dom_rename_column x:obj y:str z:str
 check same x.localName "table"

 for dom_children x
  check same v.localName "tr"

  let children dom_children v

  for children
   let column dom_data_get v "column"

   if same column y
    dom_data_set v "column" z

    if same v.localName "th"
     dom_data_set v z
     dom_text v z
    end
   end
  end
 end
end
