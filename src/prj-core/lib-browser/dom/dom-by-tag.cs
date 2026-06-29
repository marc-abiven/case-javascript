fn dom_by_tag x y
 if is_str x
  ret dom_by_tag document x

 check is_obj x
 check is_str y

 let collection x.getElementsByTagName y

 ret Array.from collection
end