fn cpl_is_call x:obj y:str
 if same y "call"
  ret true

 forin x.asts
  if same k y
   ret false
 end

 ret true
end
