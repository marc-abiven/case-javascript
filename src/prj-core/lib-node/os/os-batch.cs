gn os_batch commands:arr
 let commands dup commands
 let contexts arr
 let cpu os.availableParallelism
 let cpu dec cpu //leave one cpu for the system

 try
  while true
   //nothing to do anymore

   if is_empty commands
    if is_empty contexts
     brk
   end

   //process finished tasks

   let alives arr

   while is_full contexts
    let context shift contexts
    var closed false

    if context.closed
     os_end context
    else
     push alives context

     run sleep 0.1 // ten times per second
    end
   end

   clear contexts
   append contexts alives

   //launch new tasks

   while is_full commands
    if gte contexts.length cpu //throttle
     brk

    let command shift commands
    let context os_parallel command:etc

    push contexts context
   end
  end
 catch e
  //kill children

  for contexts
   v.child.kill
  end

  throw e
 end
end
