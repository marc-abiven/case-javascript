fn fn_args
 let stack dbg_callstack
 let frame at stack 3
 let r split frame.cs " "

 shift r

 ret r
end
