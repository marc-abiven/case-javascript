fn cpl_check_fn cpl:obj nodes:arr path:str
 let file path_file path
 let name replace file "-" "_"

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

 let s_file to_lit file
 let s_name to_lit name
 let message space "The file" s_file "must define a function or a generator nammed" s_name

 stop message
end
