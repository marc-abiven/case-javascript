fn fn_args x:str
 for dbg_callstack
  let words split v.cs " "
  let n find words x

  if lt n 0
   cont

  let index inc n

  ret slice words index
 end

 stop
end
