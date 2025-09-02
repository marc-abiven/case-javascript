fn time_delay x
 check is_num x
 check gte x 0

 if lt x 10
  let n to_fixed x

  ret concat n "s"
 end

 if lt x minute
  let n trunc x

  ret concat n "s"
 end

 if lt x hour
  let n div x minute
  let n trunc n

  ret concat n "m"
 end

 if lt x day
  let n div x hour
  let n trunc n

  ret concat n "h"
 end

 if lt x month
  let n div x day
  let n trunc n

  ret concat n "d"
 end

 if lt x year
  let n div x month
  let n trunc n

  ret concat n "m"
 end

 let n div x year
 let n trunc n

 ret concat n "y"
end