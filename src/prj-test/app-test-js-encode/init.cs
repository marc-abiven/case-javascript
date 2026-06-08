fn init x:etc
 let o obj
  42 "test"
  test arr
   "a"
   "b"
   42
 end

 let s js_encode o

 dump s
end