fn dom_unescape x
 check is_str x
 
 var r x
 
 forin entities
  let v get entities k

  assign r replace r k v
 end

 ret r
end
