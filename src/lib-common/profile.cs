fn profile x:xn y:etc
 var n null
 let before time_now

 if is_fn x
  assign r x y:etc
 elseif is_gn x
  let generator x y:etc

  while true
   let iterator generator.next

   if iterator.done
    assign r iterator.value
    brk
   end
  end
 else
  stop

 let after time_now
 let time sub after before
 let time to_fixed time
 let time concat time "s"
 let time to_lit time
 let time concat "profile=" time

 log x.name time

 ret r
end
