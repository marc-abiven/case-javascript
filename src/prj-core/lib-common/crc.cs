fn crc x:str
 var r 0

 for explode x
  for v
   let n asc v

   assign r add r n
  end
 end

 ret r
end
