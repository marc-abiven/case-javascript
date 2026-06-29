fn cpl_check_fn cpl:obj nodes:arr path:str
 let file path_file path
 let name to_c file

 if same name "check_arity"
  ret

 for nodes
  if same v.operator "fn"
  elseif same v.operator "gn"
  else
   cont

  let xn front v.args

  if same xn name
   ret
 end

 let file to_lit file
 let name to_lit name
 let message space "The file" file "must define a function or a generator nammed" name

 stop message
end
