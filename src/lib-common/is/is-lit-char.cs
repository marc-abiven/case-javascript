fn is_lit_char x
 if not is_str x
  ret false

 if not match_l x "'"
  ret false

 if not match_r x "'"
  ret false

 let s strip_l x "'"
 let s strip_r s "'"

 if is_empty s
  ret false

 let s concat quote s

 ret is_lit s
end
