fn os_kill name:str
 //get parent

 let processes os_ps

 fn get_parent pid:uint
  for processes
   if same v.pid pid
    ret v.parent
  end

  ret null
 end

 //main

 var result false

 //ancestors

 let ancestors arr

 push ancestors process.pid

 while true
  let pid back ancestors
  let parent get_parent pid

  if is_null parent
   brk

  push ancestors parent

  if same parent 0 //pid 0
   brk
 end

 shift ancestors

 //process

 for processes
  //ancestor

  let pid v.pid

  if same pid process.pid //preserve the current process and its ancestors
   cont

  if contain ancestors pid
   cont

  //filter

  let command arr

  push command v.path
  append command v.args

  let command join command " "

  if not contain command name
   cont

  //kill

  let path v.path
  let o obj pid path
  let s obj_option o

  log "kill" s

  process.kill pid "SIGKILL"

  assign result true
 end

 ret result
end