fn dom_column x:obj y:str
 check same x.localName "tr"

 for dom_children x
  let column dom_data_get v "column"

  if same column y
   ret v
 end
end
