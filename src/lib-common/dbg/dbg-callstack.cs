fn dbg_callstack stack map
 if is_undef stack
  let e new Error "callstack"

  ret dbg_callstack e.stack
 end

 check is_str stack

 if is_undef map
  let map dbg_source_map

  ret dbg_backtrace stack map
 end

 check is_obj map

 let r dbg_backtrace stack map

 while is_full r
  let frame front r
  let fn frame.fn

  if same fn "throw"
  elseif same fn "stop"
  elseif same fn "check"
  elseif same fn "check_arg"
  elseif same fn "check_arity"
  else
   brk

  shift r
 end

 ret r
end