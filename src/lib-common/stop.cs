fn stop x
 if is_undef x
  ret stop "stop"

 throw new Error x
end