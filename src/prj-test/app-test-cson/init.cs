fn init x:etc
 fn test_ret
  ret obj
   a 42
   b 43
   c 44
  end
 end

 fn test_ret2
  ret
   "a"
   "b"
   42
   arr
    obj
     test 77
  end
 end

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

 let a arr

 push a "obj"
 push a " 42 54"
 //push a "  42.1"
 push a " 43 55"
 push a " 44"
 push a "  45"
 push a " end"
 push a " 46"
 push a "end"

 let s join a

 log s

 let a cson_decode s

 dump a

 let a
  1
  2
  3
   //45
  obj
   46 33
   47
    18
   end
  end
  arr
   55
   56
   obj
    61
  end
  arr
 end

 dump a

 let s cson_encode a

 log s

 let a2 cson_decode s
 let b cmp a a2

 dump b

 let a cson_decode s
 let s cson_encode a

 dump a
 log s

 let o ansi_get_colors

 dump o

 let o test_ret

 dump o

 let o test_ret2

 dump o
end