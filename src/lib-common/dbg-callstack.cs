fn dbg_callstack x
 check is_obj x
 
 let r dbg_backtrace x
 
 while is_full r
  let frame front r
  let fn frame.fn
  
  if contain fn "throw"
  elseif contain fn "stop"
  elseif contain fn "check"
  else
   brk
   
  shift r
 end

 ret r
end
