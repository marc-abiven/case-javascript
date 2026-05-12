fn salt x:str y
 if is_undef y
  ret salt x "azertyuiop"

 var r ""
 let a1 explode x
 let a2 explode y

 while is_full a1
  if is_empty a2
   let a explode y

   append a2 a
  end

  let c1 shift a1
  let c2 shift a2
  let n1 asc c1
  let n2 asc c2
  let n xor n1 n2
  let c chr n

  assign r concat r c
 end

 ret r
end
