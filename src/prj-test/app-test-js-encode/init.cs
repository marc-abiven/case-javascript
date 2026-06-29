fn init x:etc
 let o obj
  42 "test"
  test arr
   "a"
   "b"
   42
   arr
    47
   end
   obj
    46 "test"
   end
   arr
    arr
     49
 end

 let s js_dump o

 log s

 let a
  "a"
  "b"
  "c"
 end

 let s js_dump a

 log s

 let a
  42
  43
 end

 let s js_dump a

 log s

 let o obj
  42 "test"
  43 0
  text "ok"
  "a.b.c" "again"
 end

 let s js_dump o

 log s

 let s js_dump meta

 log s

 let o obj
  57 "test"
 end

 let s js_dump o

 log s

 let a
  "unique"
 end

 let s js_dump a

 log s
end