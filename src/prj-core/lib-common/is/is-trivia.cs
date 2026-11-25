fn is_trivia x
 //space

 if is_space x
  ret true

 //comment

 if is_comment x
  ret true

 //any

 ret false
end