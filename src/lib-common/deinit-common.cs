fn deinit_common
 //abort tasks
 
 for tasks
  v.return
 end
 
 clear tasks
 
 //profile
 
 if gte verbose 0
  let profile time_now
  let profile time_delay profile
  let o obj profile
  let s obj_option o

  log app s
 end
 
 //deinit

 if is_node
  deinit_node
 elseif is_browser
  deinit_browser
 else
  stop
 
 //zombie
 
 assign global.zombie true
end
