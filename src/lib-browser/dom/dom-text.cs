fn dom_text x:obj y
 //~ check is_obj x

 if is_undef y
  ret x.textContent

 check is_cool y

 assign x.textContent y
end
