fn sigint callback:fn
 //on sigint

 fn on_sigint signal:str n:uint
  callback //erase parameters
 end

 //main

 let r on on_sigint

 process.once "SIGINT" r

 ret value r
end