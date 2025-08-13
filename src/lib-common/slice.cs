fn slice x y z
 check is_vec x
 
 let n1 inc x.length
 
 check between y 0 n1
 
 if is_undef z
  let n sub x.length y
  
  ret slice x y n
 end

 check between z 0 n1
 
 let n2 add y z

 check between n2 0 n1
 
 ret x.slice y n2
end
