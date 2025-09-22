fn gn_run x:gn y:etc
 let generator x y:etc

 fn on_timer
  let iterator generator.next

  if iterator.done
   ret

  time_timeout on_timer
 end

 on_timer
end
