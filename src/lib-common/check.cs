fn check is args:etc
 if is_true is
  if is_empty args
   ret
 elseif is_fn is
  let b is args:etc

  if is_true b
   ret

  let name is.name

  if match_l name "is_"
   let arg front args
   let name strip_l name "is_"
   let s_name to_lit name
   let s_given get_type arg
   let s_given to_lit s_given
   let s_given space s_given "given"
   let s_given paren s_given
   let message space "Expecting a value of type" s_name s_given
   let message concat message "."

   stop message
  elseif same name "not"
   let is front args
   let name strip_l is.name "is_"
   let s_name space "not" name
   let s_name to_lit s_name
   let message space "Check failed calling" s_name
   let message concat message "."

   stop message
  else
   let s_name to_lit name
   let message space "Check failed calling" s_name
   let message concat message "."

   stop message
  end
 end

 stop "check"

end