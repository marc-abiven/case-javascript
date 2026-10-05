fn check_arity operator length arity
 //same

 if same operator "same"
  if same length arity
   ret
 end

 //gte

 if same operator "gte"
  if gte length arity
   ret
 end

 //error

 let message concat "Expecting " arity " argument(s) (" length " given)"

 throw new Error message
end
