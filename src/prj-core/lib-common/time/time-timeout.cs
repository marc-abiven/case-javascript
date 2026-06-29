fn time_timeout callback:fn frequency args:etc
 if is_undef frequency
  let frequency div 1 30 //30 fps

  ret time_timeout callback frequency args:etc
 end

 check is_num frequency

 let delay mul frequency 1000 //in seconds

 setTimeout callback delay args:etc
end