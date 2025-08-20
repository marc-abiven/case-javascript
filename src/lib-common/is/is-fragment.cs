fn is_fragment x
 if not is_str x
  ret true

 if is_alnum x
  ret true

 if is_space x
  ret true

 ret false
end