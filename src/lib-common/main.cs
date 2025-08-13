fn main 
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
 assign global.output null 
 
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
 
 let s time_hn compile
 
 log "compile" s

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
