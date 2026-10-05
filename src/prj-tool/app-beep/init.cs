gn init duration args:etc
 if is_def duration
  let n to_num duration

  ret run beep n
 end

 run beep
end
