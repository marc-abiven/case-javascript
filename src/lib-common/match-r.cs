fn match_r x y
 check is_str x
 check is_str y
 
 if is_empty x
  ret false

 if is_empty y
  ret false

 if gt y.length x.length
  ret false
    
 let s slice_r x y.length
 
 ret same s y
end
