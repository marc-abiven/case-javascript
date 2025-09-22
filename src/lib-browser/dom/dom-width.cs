fn dom_width x:obj y
 let rect x.getBoundingClientRect

 var left dom_computed x "marginLeft"

 if is_empty left
  assign left 0
 else
  assign left strip_r left "px"
  assign left to_num left
 end

 var right dom_computed x "marginRight"

 if is_empty right
  assign right 0
 else
  assign right strip_r right "px"
  assign right to_num right
 end

 if is_undef y
  ret add left rect.width right

 check is_cool y

 if is_str y
  assign x.style.width y
  ret
 end

 let n sub y left right

 check gt n 0

 assign x.style.width n
end
