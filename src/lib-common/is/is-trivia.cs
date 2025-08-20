fn is_trivia x
 if not is_str x
  ret false

 if is_space x
  ret true

 if is_comment x
  ret true

 ret false
end