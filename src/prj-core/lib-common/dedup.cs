fn dedup x:arr
 let r arr

 for x
  if not contain r v
   push r v
 end

 ret r
end
