fn dom_column x:obj y:str
 //~ check is_obj x
 //~ check is_str y

 check same x.localName "tr"

 forof dom_children x
  let column dom_data_get v "column"

  if same column y
   ret v
 end
end
