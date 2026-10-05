fn call_expr_arg cpl:obj value:str
 //numeric

 if is_numeric value
  ret value

 //literal

 if is_lit value
  ret value

 //identifier

 if is_identifier value
  ret value

 //access

 if is_access value
  ret value

 //tuple

 if is_tuple value
  let a unwrap value

  check is_pair a

  let name front a
  let etc back a

  check is_identifier name
  check same etc "etc"

  ret concat "..." name
 end

 //any

 let value to_lit value
 let message space "Invalid argument" value

 stop message
end

//~ fn call_expr_arg cpl:obj arg:str
 //~ //numeric

 //~ if is_numeric arg
  //~ ret arg

 //~ //literal

 //~ if is_lit arg
  //~ ret arg

 //~ //identifier

 //~ if is_identifier arg
  //~ ret arg

 //~ //access

 //~ if is_access arg
  //~ ret arg

 //~ //tuple

 //~ if is_tuple arg
  //~ let a unwrap arg

  //~ check is_pair a

  //~ let name front a
  //~ let etc back a

  //~ check is_identifier name
  //~ check same etc "etc"

  //~ ret concat "..." name
 //~ end

 //~ //any

 //~ let arg to_lit arg
 //~ let message space "Invalid argument" arg

 //~ stop message
//~ end
