fn crc x:str
 var r 0
 let a explode x

 for a
  for s
   let n asc v

   assign r add r n
  end
 end

 //~ forin a
  //~ let i to_i k
  //~ let s at a i

  //~ forin s
   //~ let i to_i k
   //~ let v at s i
   //~ let n asc v

   //~ assign r add r n
  //~ end
 //~ end

 ret r
end
