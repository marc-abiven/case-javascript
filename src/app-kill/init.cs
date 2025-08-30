fn init x y:etc
 check is_str x

 fn get_ancestors x
  check is_uint x

  let r arr

  push r x

  while true
   let pid back r
   let n get_parent pid

   push r n

   if same n 0
    brk
  end

  shift r

  ret r
 end

 fn get_parent x
  check is_uint x

  let s os_execute "ps" "-o" "ppid=" "--pid" x
  let s trim s

  ret to_uint s
 end

 let ancestors get_ancestors process.pid
 let processes os_ps

 forof processes
  let pid v.pid

  if same pid process.pid
   cont

  if contain ancestors pid
   cont

  let command arr

  push command v.path
  append command v.args

  let command join command " "

  if not contain command x
   cont

  let s to_lit v.path

  log "kill" pid s

  os_system "kill" "-9" pid
 end
end