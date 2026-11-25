fn cpl_is_call cpl:obj token:str
 //explicit call

 if same token "call"
  ret true

 //statement

 forin cpl.asts
  if same k token
   ret false
 end

 //callable name

 check is_name token

 ret true
end