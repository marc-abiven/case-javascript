fn os_kill name:str
 //get ancestors

 fn get_ancestors x:uint
  let r arr

  push r x

  while true
   let pid back r
   let n get_parent pid

   push r n

   if same n 0 //pid 0
    brk
  end

  shift r

  ret r
 end

 //get parent

 fn get_parent x:uint
  let s os_execute "ps" "-o" "ppid=" "--pid" x
  let s trim s

  ret to_uint s
 end

 //main

 let ancestors get_ancestors process.pid

 for os_ps
  let pid v.pid

  if same pid process.pid //preserve the current process and its ancestors
   cont

  if contain ancestors pid
   cont

  let command arr

  push command v.path
  append command v.args

  let command join command " "

  if not contain command name
   cont

  let path v.path
  let o obj pid path
  let s obj_option o

  log "kill" s

  os_system "kill" "-9" pid
 end
end