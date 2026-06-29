fn stm_run stm:obj x:xn args:etc
 //function

 if is_fn x
  let fn partial x args:etc

  push stm.tasks fn

  ret
 end

 //generator

 if is_gn x
  let name x.name
  let iterator x args:etc
  let task obj name iterator

  push stm.tasks task

  ret
 end

 //any

 stop
end
