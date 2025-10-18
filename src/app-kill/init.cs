fn init x:str y:etc
 fn get_ancestors x:uint
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

 fn get_parent x:uint
  let s os_execute "ps" "-o" "ppid=" "--pid" x
  let s trim s

  ret to_uint s
 end

 let ancestors get_ancestors process.pid
 let processes os_ps

 for processes
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

  let path v.path
  let o obj pid path
  let s obj_option o

  log "kill" s

  os_system "kill" "-9" pid
 end
end
