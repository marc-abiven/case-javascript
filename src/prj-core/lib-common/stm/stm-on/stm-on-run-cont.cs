fn stm_on_run_cont stm:obj event:str args:etc
 let tasks stm.tasks
 let task shift tasks

 if is_fn task
  task
 elseif is_obj task
  let name task.name

  stm_log3 stm "yield" name

  var result null

  try
   assign result task.iterator.next
  catch e
   stm_post stm "error" e
  end

  if is_null result
   ret

  if result.done
   stm_log3 stm "finish" name
  else
   push tasks task
 end

 stm_post stm "cont"

 //dbg
 if is_empty tasks
  ret "deinit"

 //if is_empty tasks
 // ret "wait"

 ret "run"
end
