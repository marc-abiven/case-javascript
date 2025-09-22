fn is_token x
 if is_atom x
  ret true

 if is_comment x
  ret true

 ret false
end
