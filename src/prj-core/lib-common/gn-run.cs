fn gn_run gn:gn args:etc
 let begin time_now
 let iterator gn args:etc

 while true
  //iterator

  let result iterator.next
  let done result.done
  let value result.value

  if done
   ret value

  check is_undef value

  //timeout

  let now time_now
  let time sub now begin

  check lt time 2
 end
end
