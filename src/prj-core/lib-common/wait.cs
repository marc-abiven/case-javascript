gn wait time
 if is_def time
  check is_num time
  check gte time 0
 end

 let begin time_now

 while true
  if is_def time
   let now time_now
   let t sub now begin

   if gte t time
    brk
  end

  yield
 end
end