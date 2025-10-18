fn beep
 let duration 0.1
 
 task_run os_detach "play" "-n" "synth" duration "sine" 880 "vol" 0.5
end
