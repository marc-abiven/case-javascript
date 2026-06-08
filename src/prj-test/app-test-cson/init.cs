fn init x:etc
 let s a-b-c
 let b 42
 let a0 arr
  "a"
  "b"
  true
  arr
  arr
   b
  arr
  obj
   s "test"
   s2 s
  end
 end

 dump a0

 let bad arr
  "test"
  //a:b
 end

 let a1 arr

 let b1 obj

 let c "test"

 let a_complex arr
  "a"
  "b"
  c
  obj
   "sub-key" "test"
   b c
   "e" obj
    e "test"
    z "again"
    //a:b
   end
  end
 end

 dump a_complex

 let o_complex obj
  4 "4"
  5 "5"
  a "v1"
  b "v2"
  c c
  "d" "d"
  42 arr
   c
   "test-array"
  end
  43 arr
   obj
   arr
   null
  a-b-c d-e-f
 end

 dump o_complex

 let o obj
  47 "ok47"
 end

 dump o

 let o obj
  test "ok"
  sub null
  null "ok"
  conflict "test"
  //conflict "again"
  //"conflict" "lit"
 end

 dump o

 //save

 let path path_tmp

 cson_save path o_complex

 let s file_load path

 log s

 //load

 let v cson_load path

 dump v

 //value decode

 let s "42"
 let v cson_decode s

 dump v

 let s "a.b.c"
 let v cson_decode s

 dump v

 let s to_lit "42test"
 let v cson_decode s

 dump v

 let s to_lit "a-b-c"
 let v cson_decode s

 dump v

 //value encode

 let v 42
 let s cson_encode v

 dump s

 let v "a.b.c"
 let s cson_encode v

 dump s

 let v "42test"
 let s cson_encode v

 dump s

 let v "a-b-c"
 let s cson_encode v

 dump s
end