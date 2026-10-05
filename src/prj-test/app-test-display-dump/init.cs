fn init x:etc
 let a arr "a" "b" "c"
 let s display_dump a

 log "display_dump a" s

 let o obj a s
 let s display_dump o

 log "display_dump o" s

 let s display_encode a

 log "display_encode a" s

 let s display_encode o

 log "display_encode o" s

 let s js_encode a

 log "js_encode a" s

 let s js_encode o

 log "js_encode o" s

 let v null
 let s display_dump v

 log "display_dump v" s

 let o obj v
 let s obj_option o

 log "obj_option o" s

 let v true
 let s display_dump v

 log "display_dump v" s

 let o obj v
 let s obj_option o

 log "obj_option o" s
end