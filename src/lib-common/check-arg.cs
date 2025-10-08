fn check_arg is arg name type
 let test is arg

 if is_true test
  ret

 let s_name to_lit name
 let s_type to_lit type
 let s_given get_type arg
 let s_given to_lit s_given
 let s_given space s_given "given"
 let s_given paren s_given
 let message space "Expecting argument" s_name "to be of type" s_type s_given
 let message concat message "."

 stop message
end
