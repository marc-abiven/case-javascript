gn resolve x:obj
 //on then

 var done false
 var result null
 var error null

 fn on_then x:def
  assign result x
  assign done true
 end

 //on catch

 fn on_catch x:obj
  assign error x
  assign done true
 end

 //main

 let promise x.then on_then

 promise.catch on_catch

 while not done
  yield
 end

 if is_obj error
  throw error

 ret result
end
