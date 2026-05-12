fn match_l x:str y:str
 if is_empty x
  ret false

 if is_empty y
  ret false

 if gt y.length x.length
  ret false

 let s slice_l x y.length

 ret same s y
end
