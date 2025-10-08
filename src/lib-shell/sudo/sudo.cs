fn sudo x y:etc
 if not is_fn x
  ret sudo os_system x y:etc
  
 ret x "sudo" y:etc
end
