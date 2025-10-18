fn main
 //on load
 
 fn on_load x:obj
  if same document.readyState "complete"
   init_common

   assign window.onload null
  end
 end
 
 //main
 
 //detect platform
 
 var has_window true

 try
  inline "window"
 catch
  assign has_window false
 end

 if has_window
  assign window.global window
  assign global.has_window true
 else
  assign global.has_window false
  
 //globals

 assign global.zombie false
 assign global.start time_get
 assign global.lf "\n"
 assign global.cr "\r"
 assign global.crlf concat cr lf
 assign global.punct "!\"#$%&'()*+,-./:;<=>?@[\\]^`{|}~"
 assign global.digit "0123456789"
 assign global.lower "abcdefghijklmnopqrstuvwxyz"
 assign global.upper to_upper lower
 assign global.output null
 assign global.verbose 0
 assign global.minute 60
 assign global.hour mul 60 minute
 assign global.day mul 24 hour
 assign global.week mul 7 day
 assign global.month mul 30 day
 assign global.year mul 12 month
 assign global.kb 1024
 assign global.mb mul kb 1024
 assign global.gb mul mb 1024
 assign global.tb mul gb 1024
 assign global.traces arr
 
 //common
 
 if is_node
  init_common
 elseif is_browser
  assign window.onload on on_load
 else
  stop
end
