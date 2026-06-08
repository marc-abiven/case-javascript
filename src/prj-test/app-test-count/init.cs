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
end