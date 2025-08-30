fn dbg_callstack x
 if is_undef x
  let e new Error "callstack"

  ret dbg_callstack e.stack
 end

 check is_str x

 let r dbg_backtrace x

 while is_full r
  let frame front r
  let fn frame.fn

  if same fn "throw"
  elseif same fn "stop"
  elseif same fn "check"
  else
   brk

  shift r
 end

 ret r
end