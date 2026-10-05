gn init x:etc
 let commands arr
 let command arr "./make" "test-parse" "--compile"

 //push commands

 fornum 100
  let command arr "echo" i

  push commands command
 end

 run os_batch commands
end
