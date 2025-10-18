fn dom_computed x y
 if is_str x
  ret dom_computed html x

 check is_obj x
 check is_str y

 let style getComputedStyle x
 let r style.getPropertyValue y

 ret r
end
