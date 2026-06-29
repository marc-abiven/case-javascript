fn sigint callback:fn
 //on sigint

 fn on_sigint x:str n:uint
  let pid process.pid
  let signal x
  let o obj pid signal n
  let s obj_option o

  log meta.app s

  callback x
 end

 //main

 let r on on_sigint

 process.once "SIGINT" r

 ret value r
end
