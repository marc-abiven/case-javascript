fn check_arg is arg name type
 let test is arg

 if is_true test
  ret

 let name to_lit name
 let type to_lit type
 let given get_type arg
 let given to_lit given
 let given space given "given"
 let given paren given
 let message space "Expecting argument" name "to be of type" type given
 let message concat message "."

 stop message
end