fn dedup x:arr
 let r arr

 forof x
  if not contain r v
   push r v
  end
 end

 ret r
end
