fn init_common x:etc
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
  deinit_common
 elseif is_gn init
  let generator init x:etc

  fn on_timer
   let iterator generator.next

   if iterator.done
    deinit_common
    ret
   end

   time_timeout on_timer
  end

  on_timer
 end
end