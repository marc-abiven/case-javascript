fn dedup x
 check is_arr x

 let r arr

 forof x
  if not contain r v
   push r v
  end
 end

 ret r
end