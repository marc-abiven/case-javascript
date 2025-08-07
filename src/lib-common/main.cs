fn main
 fn pump x:etc
  if is_fn init
   init x:etc
   profile  
  elseif is_gn init
   let generator init x:etc
   
   fn on_timer
    let iterator generator.next
    
    if iterator.done
     profile
     
     ret
    end
    
    time_timeout on_timer
   end

   on_timer
  end
 end

 fn profile
  let n time_now
  let name app_name
  let s to_fixed n  
  let s concat s "s"

  log "profile" name s
 end
 
 fn get_fns
  var content null
  
  if is_node
   let script at process.argv 1
   
   assign content file_read script
  elseif is_browser
   assign content html.innerHTML
  else
   stop
   
  forof punct  
   assign content replace content v " "
  end

  let words replace content "\n" " "
  let words replace_rec content "  " " "
  let words split content " "
  let o obj
  
  forof words
   let k v
   
   if has o k
    cont
   
   if not is_identifier k
    cont
   
   var v null
    
   try
    assign v eval k
   catch
   end
    
   if not is_fn v
    cont
    
   put o k v
  end
 
  ret sort o 
 end

 if is_browser
  assign window.global window

 assign global.zombie false
 assign global.start time_get
 assign global.punct "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 assign global.digit "0123456789"
 assign global.lower "abcdefghijklmnopqrstuvwxyz"
 assign global.upper to_upper lower
 
 if is_node
  main_node
 elseif is_browser
  main_browser
 else
  stop

 assign global.fns get_fns
 
 forin fns
  if match k "init_*"
   let v get fns k

   v
  end
 end

 if is_node
  let args slice process.argv 2

  pump args:etc
 elseif is_browser
  fn on_load
   if same document.readyState "complete"
    pump
    
    assign window.onload null
   end
  end
  
  assign window.onload on on_load
 else
  stop
end
