fn sigint callback:fn
 //on sigint

 fn on_sigint x:str n:uint
  let pid process.pid
  let signal x
  let o obj pid signal n
  let s obj_option o

  log app s

  callback x
 end

 //main

 let on_sigint on on_sigint

 process.once "SIGINT" on_sigint

 ret value on_sigint
end
