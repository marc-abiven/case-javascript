fn dom_escape x:str
 //~ check is_str x

 var r x

 forin entities
  let v get entities k

  assign r replace r v k
 end

 ret r
end
