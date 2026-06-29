fn init x:etc
 let s "abc"
 let n count s "."

 log n

 let s "a.bc"
 let n count s "."

 log n

 let s ".abc"
 let n count s "."

 log n

 let s "abc."
 let n count s "."

 log n

 let s "abc.."
 let n count s "."

 log n
 
 let a 42
 let b 43
 let c 42
 let o obj a b c
 let n count o 42
 
 log o
 log n
end
