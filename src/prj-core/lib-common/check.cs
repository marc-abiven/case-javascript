fn check is args:etc
 //check trailing

 fn check_trailing args:obj
  let value format args
  let message space "Trailing parameters" value
  let message concat message "."

  stop message
 end

 //check failed

 fn check_failed args:obj
  let value format args
  let message space "Check failed evaluating" value
  let message concat message "."

  stop message
 end

 //format

 fn format args:obj
  let r arr_from args
  let r limit_complexity r 64
  let r map r encode
  let r join r " "
  let r cut_r r 64
  let r to_lit r

  ret r
 end

 //encode

 fn encode x
  if is_xn x
   ret x.name

  ret display_encode x
 end

 //main

 if is_true is
  //true

  //trailing

  if is_full args
   check_trailing arguments
 elseif is_false is
  //false

  //trailing

  if is_full args
   check_trailing arguments

  //failed

  check_failed arguments
 elseif is_fn is
  //fn

  let condition is args:etc

  //failed

  if is_true condition
  else
   check_failed arguments //anything but true
 else
  //unable to evaluate

  let value format arguments
  let message space "Unable to evaluate" value
  let message concat message "."

  stop message
 end
end
