fn init x:etc
 let s display_dump global

 log s
 log global

 let s repeat "x" 1024
 let s ansi_encode s "red"

 log s
end
