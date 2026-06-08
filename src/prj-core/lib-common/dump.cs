fn dump x
 if is_undef x
  check same arguments.length 1

 let name fn_args "dump"

 check is_single name
 
 var name front name
 var value x

 if is_identifier name
  assign name to_lisp name
  
 if is_str value
  assign value to_lit value

 log name value
end
