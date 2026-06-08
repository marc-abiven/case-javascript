fn unzip x y:etc
 if not is_fn x
  ret unzip os_system x y:etc

 ret x "unzip" y:etc
end
