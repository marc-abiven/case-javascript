fn init x:etc
 let n process.umask

 log n

 no_umask nop

 let n process.umask

 log n
end