fn deinit_common stm:obj
 //profile

 if is_main_thread
  let profile time_now
  let profile time_delay profile
  let o obj profile
  let s obj_option o

  log2 meta.app s
 end
end
