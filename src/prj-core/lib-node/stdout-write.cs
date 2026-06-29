//ensure console.log outputs aren't discarded when the process finishes

fn stdout_write x:str
 //before the complete init of init_node

 let stdout 1 //because process.stdout.fd is undefined in the threads
 let buffer Buffer.from x
 var offset 0

 while lt offset buffer.length
  let rest sub buffer.length offset
  var n 0

  try
   assign n fs.writeSync stdout buffer offset rest //sync
  catch e
   if same e.code "EAGAIN"
    os_sleep 0.1

    cont
   end

   throw e
  end

  assign offset add offset n
 end
end