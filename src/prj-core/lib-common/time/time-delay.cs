fn time_delay x:num
 check gte x 0

 let minute3 mul minute 3
 let hour3 mul hour 3
 let day3 mul day 3
 let month3 mul month 3
 let year3 mul year 3

 if lt x 10
  let n to_fixed x

  ret concat n "s"
 end

 if lt x minute3
  let n trunc x

  ret concat n "s"
 end

 if lt x hour3
  let n div x minute
  let n trunc n

  ret concat n "m"
 end

 if lt x day3
  let n div x hour
  let n trunc n

  ret concat n "h"
 end

 if lt x month3
  let n div x day
  let n trunc n

  ret concat n "d"
 end

 if lt x year3
  let n div x month
  let n trunc n

  ret concat n "mo"
 end

 let n div x year
 let n trunc n

 ret concat n "y"
end