fn deinit_common
 //tasks
 
 for tasks
  v.return
 end
 
 clear tasks
 
 //profile
 
 if gte verbose 0
  let profile time_now
  let profile time_delay profile
  let profile to_lit profile
  let profile concat "profile=" profile

  log app profile
 end
 
 //deinit

 if is_node
  deinit_node
 elseif is_browser
  deinit_browser
 else
  stop
end
