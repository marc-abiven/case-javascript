gn resolve x:obj
 check is_obj x

 var done false
 var result null
 var error null

 fn on_then x:def
  assign result x
  assign done true
 end

 fn on_catch x
  check is_obj x

  assign error x
  assign done true
 end

 let promise x.then on_then

 promise.catch on_catch

 while not done
  yield
 end

 if is_obj error
  throw error

 ret result
end
