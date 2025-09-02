fn is_trivia x
 if is_space x
  ret true

 if is_comment x
  ret true

 ret false
end
