fn is_absolute x
 if not is_str x
  ret false

 if not match_l x "/"
  ret false

 let components path_split x

 if contain components "."
  ret false

 if contain components ".."
  ret false

 ret true
end