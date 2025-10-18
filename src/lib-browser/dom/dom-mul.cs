fn dom_mul x:str y:num
 var unit null

 if match_r x "px"
  assign unit "px"
 elseif match_r x "vw"
  assign unit "vw"
 else
  stop

 let s strip_r x unit
 let n to_num s
 let n mul n y

 ret concat n unit
end
