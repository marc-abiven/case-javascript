fn dom_width node:obj width
 let rect node.getBoundingClientRect
 var left dom_computed node "marginLeft"

 if is_empty left
  assign left 0
 else
  assign left strip_r left "px"
  assign left to_num left
 end

 var right dom_computed node "marginRight"

 if is_empty right
  assign right 0
 else
  assign right strip_r right "px"
  assign right to_num right
 end

 if is_undef width
  ret add left rect.width right

 check is_cool width

 if is_str width
  assign node.style.width width
  ret
 end

 let n sub width left right

 check gt n 0

 assign node.style.width n
end
