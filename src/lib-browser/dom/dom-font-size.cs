fn dom_font_size x:obj y
 if is_undef y
  ret x.style.fontSize

 check is_str y

 assign x.style.fontSize y
end
