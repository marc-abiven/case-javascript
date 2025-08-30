fn gn_run x y:etc
 check is_gn x

 let generator x y:etc

 fn on_timer
  let iterator generator.next

  if iterator.done
   ret

  time_timeout on_timer
 end

 on_timer
end
