fn fn_args x:str
 for dbg_callstack
  let a split v.cs " "
  let n find a x

  if lt n 0
   cont

  let index inc n

  ret slice a index
 end

 stop
end
