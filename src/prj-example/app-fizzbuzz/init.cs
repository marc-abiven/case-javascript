fn init x:etc
 fornum 30
  let n inc i

  //by 3

  var by_3 true

  if mod n 3
   assign by_3 false

  //by 5

  var by_5 true

  if mod n 5
   assign by_5 false

  //fizzbuzz

  if and by_3 by_5
   log n "FizzBuzz"

   cont
  end

  //fizz

  if by_3
   log n "Fizz"

   cont
  end

  //buzz

  if by_5
   log n "Buzz"

   cont
  end

  //any

  log n
 end
end