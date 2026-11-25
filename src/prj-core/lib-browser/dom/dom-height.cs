fn dom_height node:obj value
 let rect node.getBoundingClientRect

 var top dom_computed node "marginTop"

 if is_empty top
  assign top 0
 else
  assign top strip_r top "px"
  assign top to_num top
 end

 var bottom dom_computed node "marginBottom"

 if is_empty bottom
  assign bottom 0
 else
  assign bottom strip_r bottom "px"
  assign bottom to_num bottom
 end

 if is_undef value
  ret add top rect.height bottom

 check is_cool value

 if is_str value
  assign node.style.height value

  ret
 end

 let n sub value top bottom

 check gt n 0

 assign node.style.height n
end
