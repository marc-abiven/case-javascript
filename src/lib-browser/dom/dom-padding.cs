fn dom_padding x:obj y
 if is_undef y
  ret x.style.padding

 check is_cool y

 assign x.style.padding y
end
