fn is_tree x
 //array

 if same x "arr"
  ret true

 //object

 if same x "obj"
  ret true

 //any

 ret false
end
