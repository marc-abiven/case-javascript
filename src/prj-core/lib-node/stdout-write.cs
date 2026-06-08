//console.log outputs can be discarded when the process finishes

fn stdout_write x:str
 let buffer Buffer.from x
 var offset 0

 while lt offset buffer.length
  let rest sub buffer.length offset
  var n 0

  try
   assign n fs.writeSync process.stdout.fd buffer offset rest //sync
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
