fn main
 fn pump x:etc
  if is_fn init
   init x:etc
   profile  
  elseif is_gn init
   let generator init x:etc
   
   fn on_timer
    let iterator call generator.next
    
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
  let n call time_now
  let name call get_name  
  let s to_fixed n  
  let s concat s "s"

  log "profile" name s
 end
 
 fn get_name
  if call is_node
   let file at process.argv 1
   let file path_file file
   
   ret replace file "." "-"
  elseif call is_browser
   let file location.hostname
   let file path_file file

   ret replace file "." "-"
  else
   stop
 end
 
 fn get_fns
  var content null
  
  if call is_node
   let script at process.argv 1
   
   assign content file_read script
  elseif call is_browser
   let html call dom_html 
   
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

 if call is_browser
  assign window.global window

 assign global.caught false
 assign global.start call time_get
 assign global.punct "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 assign global.digit "0123456789"
 assign global.lower "abcdefghijklmnopqrstuvwxyz"
 assign global.upper to_upper lower
 
 if call is_node
  assign global.cp require "child_process"
  assign global.fs require "fs"
  assign global.http require "http"
  assign global.os require "os"
  assign global.path require "path"
  assign global.util require "util"
 elseif call is_browser
  assign global.body document.body
  assign global.font "1.5vw monospace"
 else
  stop
 
 assign global.fns call get_fns
 
 forin fns
  if match k "init_*"
   let v get fns k

   v
  end
 end

 if call is_node
  let args slice process.argv 2

  pump args:etc
 elseif call is_browser
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
