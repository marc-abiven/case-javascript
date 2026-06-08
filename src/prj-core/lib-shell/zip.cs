fn zip x y:etc
 if not is_fn x
  ret zip os_system x y:etc

 ret x "zip" "--recurse-paths" "-9" y:etc
end
