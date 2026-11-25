fn shuffle x:arr
 let r arr
 let a dup x

 while is_full a
  let n random a.length
  let v at a n

  remove a n
  push r v
 end

 ret r
end
