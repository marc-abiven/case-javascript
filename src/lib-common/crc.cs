fn crc x
 check is_str x

 var r 0
 let a explode x

 forin a
  let i to_i k
  let s at a i

  forin s
   let i to_i k
   let v at s i
   let n asc v

   assign r add r n
  end
 end

 ret r
end