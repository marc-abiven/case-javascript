fn crc x:str
 var r 0
 let a explode x

 for a
  for s
   let n asc v

   assign r add r n
  end
 end

 ret r
end
