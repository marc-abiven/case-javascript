fn dom_height x:obj y
 check is_obj x

 let rect x.getBoundingClientRect

 var top dom_computed x "marginTop"

 if is_empty top
  assign top 0
 else
  assign top strip_r top "px"
  assign top to_num top
 end

 var bottom dom_computed x "marginBottom"

 if is_empty bottom
  assign bottom 0
 else
  assign bottom strip_r bottom "px"
  assign bottom to_num bottom
 end

 if is_undef y
  ret add top rect.height bottom

 check is_cool y

 if is_str y
  assign x.style.height y
  ret
 end

 let n sub y top bottom

 check gt n 0

 assign x.style.height n
end
