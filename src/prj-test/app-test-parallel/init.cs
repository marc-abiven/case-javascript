gn init x:etc
 let commands arr
 let command arr "./make" "test-parse" "--compile"

 //push commands command

 fornum 100
  let command arr "echo" i
  //let command arr "find" "archive"

  push commands command
 end

 run os_batch commands
end
