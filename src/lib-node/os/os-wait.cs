//wait for the end of processes launched by os_parallel

gn os_wait contexts:arr

 //wait end

 gn wait_end contexts:arr
  let contexts dup contexts

  while is_full contexts
   yield

   //closed

   let context shift contexts

   if not context.closed
    push contexts context
    cont
   end

   //display command

   let command context.command
   let status context.status
   let o obj status
   let s obj_option o

   log command:etc s

   //display streams

   for split context.out
    log "out>" v
   end

   for split context.err
    log "err>" v
   end

   //error

   if different status 0
    let command front command
    let command to_lit command
    let message space "Command" command "failed with status" status

    stop message
   end
  end
 end

 //main

 try
  run wait_end contexts
 catch e
  //kill children

  for contexts
   v.child.kill
  end

  throw e
 end

end