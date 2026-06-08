fn sudo x y:etc
 if not is_fn x
  ret sudo os_system x y:etc

 //os run

 if same x os_run
  let y dup y
  let binary shift y

  check is_bool binary

  ret x binary "sudo" y:etc
 end

 //any

 ret x "sudo" y:etc
end