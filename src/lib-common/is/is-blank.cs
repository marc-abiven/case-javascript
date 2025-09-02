fn is_blank x
 if is_empty x
  ret true

 if is_space x
  ret true

 ret false
end
