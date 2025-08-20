fn is_blank x
 if not is_str x
  ret false

 if is_empty x
  ret true

 if is_space x
  ret true

 ret false
end