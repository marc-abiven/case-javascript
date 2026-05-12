fn is_user x
 if not is_str x
  ret false

 //only alnum dot and dash

 for split x "-"
  for split v "."
   if not is_alnum v
    ret false
  end
 end

 ret true
end