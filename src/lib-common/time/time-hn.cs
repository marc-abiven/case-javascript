fn time_hn x y
 check is_num x

 if is_undef y
  ret time_hn x true

 check is_bool y

 fn get_unit x
  check is_num x

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

 let now time_get

 if same x now
  ret "now"

 if gt x now
  let n sub x now
  let s get_unit n

  if y
   ret concat "in " s

  ret s
 end

 let n sub now x
 let s get_unit n

 if y
  ret concat s " ago"

 ret s
end
