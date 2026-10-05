fn dom_computed node key
 if is_str node
  ret dom_computed html node

 check is_obj node
 check is_str key

 let style getComputedStyle node

 ret style.getPropertyValue key
end
