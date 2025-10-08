fn sigint callback:fn
 //on sigint

 fn on_sigint x:str n:uint
  let pid concat "pid=" process.pid
  let signal concat "signal=" x
  let n concat "n=" n

  log app pid signal n

  callback x
 end

 //main

 let on_sigint on on_sigint

 process.once "SIGINT" on_sigint

 ret value on_sigint
end