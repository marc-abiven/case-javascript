fn dom_mul value:str number:num
 var unit null

 if match_r value "px"
  assign unit "px"
 elseif match_r value "vw"
  assign unit "vw"
 else
  stop

 let s strip_r value unit
 let n to_num s
 let n mul n number

 ret concat n unit
end
