fn deinit_common
 //abort tasks

 for tasks
  let name v.name
  let o obj name
  let s obj_option o

  log "abort" s

  v.iterator.return
 end

 clear tasks

 //profile

 let profile time_now
 let profile time_delay profile
 let o obj profile
 let s obj_option o

 log2 app s

 //deinit

 if is_node
  deinit_node
 elseif is_browser
  deinit_browser
 else
  stop

 //zombie

 assign zombie true //global
end