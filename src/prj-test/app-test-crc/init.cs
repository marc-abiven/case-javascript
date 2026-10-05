fn init x:etc
 let s "blabla"
 let n crc s

 log s n

 let s random_str 50 false
 let n crc s

 log s n
end