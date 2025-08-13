fn pump x:etc
 fn profile
  let n time_now
  let name app_name
  let s to_fixed n
  let s concat s "s"

  log "profile" name s
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
  profile
 elseif is_gn init
  let generator init x:etc

  fn on_timer
   let iterator generator.next
   
   if iterator.done
    profile    
    dir_change cwd
    ret
   end
   
   time_timeout on_timer
  end
    
  on_timer
 end
end
