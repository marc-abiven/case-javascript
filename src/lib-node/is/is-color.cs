fn is_color
 if color
  ret true

 if is_interactive
  ret true

 ret false
end