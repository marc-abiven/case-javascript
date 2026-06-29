fn dom_src x:obj y
 if is_undef y
  ret x.src

 check is_str y

 assign x.src y
end
