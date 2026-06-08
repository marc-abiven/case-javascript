fn is_tree x
 if not is_str x
  ret false

 if same x "arr"
  ret true

 if same x "obj"
  ret true

 ret false
end