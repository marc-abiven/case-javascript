fn check_arg is arg name type
 //~ if not is_fn is
  //~ stop "check-arg is"
 
 //~ if is_undef arg
  //~ stop "check-arg arg"
 
 //~ if not is_str name
  //~ stop "check-arg name"

 //~ if not is_str type
  //~ stop "check-arg type"
  
 let test is arg

 //~ if not is_bool test
  //~ stop "check-arg test"
 
 if is_true test
  ret

 let s_name to_lit name
 let s_type to_lit type
 let s_given typeof arg
 let s_given to_lit s_given
 let s_given space s_given "given"
 let s_given paren s_given
 let message space "Expecting argument" s_name "to be of type" s_type s_given
 
 stop message 
end
