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
   let name to_lit name
   let given get_type arg
   let given to_lit given
   let given space given "given"
   let given paren given
   let message space "Expecting a value of type" name given
   let message concat message "."

   stop message
  elseif same name "not"
   let is front args
   let name strip_l is.name "is_"
   let name space "not" name
   let name to_lit name
   let message space "Check failed calling" name
   let message concat message "."

   stop message
  else
   let name to_lit name
   let message space "Check failed calling" name
   let message concat message "."

   stop message
  end
 end

 stop "check"
end
