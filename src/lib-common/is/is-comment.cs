fn is_comment x
 if not is_ln x
  ret false

 ret match_l x "//"
end