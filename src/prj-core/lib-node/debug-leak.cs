fn debug_leak
 let handles process._getActiveHandles
 let requests process._getActiveRequests
 let resources process.getActiveResourcesInfo()

 for handles
  let s clone v
  let s js_encode s
  let type get_class v
  let type to_snake type
  let o obj type
  let s2 obj_option o

  console.log "handle" s2 s
 end

 for requests
  let s clone v
  let s js_encode s
  let type get_class v
  let type to_snake type
  let o obj type
  let s2 obj_option o

  console.log "request" s2 s
 end

 for resources
  let s to_snake v

  console.log "resource" s
 end
end