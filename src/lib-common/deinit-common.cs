fn deinit_common
 if is_node
  deinit_node

 if gte verbose 0
  let profile time_now
  let profile time_delay profile
  let profile to_lit profile
  let profile concat "profile=" profile

  log app profile
 end
end