gn beep duration
 if is_undef duration
  ret run beep 0.1

 check is_num duration

 run os_prompt "play" "-n" "synth" duration "sine" 880 "vol" 0.5
 //stm_run app os_detach "play" "-t" "alsa" "-n" "synth" duration "sine" 880 "vol" 0.5
end