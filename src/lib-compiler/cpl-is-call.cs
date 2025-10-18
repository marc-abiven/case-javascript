fn cpl_is_call cpl:obj token:str
 if same token "call"
  ret true

 forin cpl.asts
  if same k token
   ret false
 end

 ret true
end
