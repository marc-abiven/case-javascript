fn time_hn x:num
 let now time_get

 if same x now
  ret "now"

 if gt x now
  let n sub x now
  let s time_delay n

  ret concat "in " s
 end

 let n sub now x
 let s time_delay n

 ret concat s " ago"
end