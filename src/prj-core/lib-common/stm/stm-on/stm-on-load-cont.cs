fn stm_on_load_cont stm:obj event:str args:etc
 //continue

 stm_post stm "cont"

 //browser

 if is_browser
  if same document.readyState "complete"
   ret "ready"

  ret
 end

 //node

 if is_node
  ret "ready"

 //any

 stop
end