fn main_pump x:etc
 fn deinit
  if is_node
   dir_change cwd

  profile
 end

 fn profile
  let profile time_hn start false
  let profile to_lit profile
  let profile concat "profile=" profile

  log app profile
 end

 if is_node
  assign global.cwd dir_current

  let script at process.argv 1
  let dir path_dir script

  dir_change dir
 elseif is_browser
 else
  stop

 if is_fn init
  init x:etc
  deinit
 elseif is_gn init
  let generator init x:etc

  fn on_timer
   let iterator generator.next

   if iterator.done
    deinit
    ret
   end

   time_timeout on_timer
  end

  on_timer
 end
end
