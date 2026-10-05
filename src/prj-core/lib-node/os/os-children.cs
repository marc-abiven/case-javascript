fn os_children pid
 if is_undef pid
  ret os_children process.pid

 let r arr

 for os_ps
  if different v.parent pid
   cont

  if same v.path "ps" //not ps itself
   cont

  push r v.pid
 end

 ret r
end