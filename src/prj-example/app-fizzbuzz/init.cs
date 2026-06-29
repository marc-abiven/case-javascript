fn init x:etc
 fornum 20
  let by_3 not mod i 3
  let by_5 not mod i 5

  if and by_3 by_5
   log "FizzBuzz"
  elseif by_3
   log "Fizz"
  elseif by_5
   log "Buzz"
  else
   log i
 end
end