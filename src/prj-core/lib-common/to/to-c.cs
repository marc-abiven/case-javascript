fn to_c x:str
 if match_l x "-"
  let s strip_l x "-"

  if is_empty s
   ret "_"

  ret to_c s
 end

 ret replace x "-" "_"
end