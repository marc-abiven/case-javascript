fn dom_font_family x:obj y
 if is_undef y
  ret x.style.fontFamily

 check is_str y

 assign x.style.fontFamily y
end
