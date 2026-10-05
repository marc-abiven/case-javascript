fn stop x
 if is_undef x
  ret stop "stop"

 let e new Error x

 throw e
end