gn stm_idle stm:obj
 let tasks stm.tasks
 let task shift tasks

 //fn

 if is_fn task
  task

  ret
 end

 //generator

 if is_obj task
  let name task.name
  let result task.iterator.next
  let done result.done
  let value result.value

  if done
   //finish

   let o obj name

   if is_def value
    assign o.value value

   let s obj_option o

   stm_log3 stm "finish" s
  else
   //continue

   check is_undef value

   push tasks task
  end

  ret
 end

 //any

 stop
end