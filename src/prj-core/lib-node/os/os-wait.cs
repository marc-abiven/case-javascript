//wait for the end of processes launched by os_parallel

gn os_wait contexts:arr
 let contexts dup contexts //preserve parameter

 try
  while is_full contexts
   let context shift contexts

   if context.closed
    os_end context
   else
    push contexts context

    run sleep 0.1 // ten times per second
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