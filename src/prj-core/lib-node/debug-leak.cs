fn debug_leak
 let handles process._getActiveHandles
 let requests process._getActiveRequests
 let resources process.getActiveResourcesInfo

 for handles
  let value display_encode v
  let type get_class v
  let type to_snake type
  let o obj type
  let s obj_option o

  stm_log app "handle" s value
 end

 for requests
  let value display_encode v
  let type get_class v
  let type to_snake type
  let o obj type
  let s obj_option o

  stm_log app "request" s value
 end

 for resources
  let value display_encode v

  stm_log app "resource" value
 end
end
