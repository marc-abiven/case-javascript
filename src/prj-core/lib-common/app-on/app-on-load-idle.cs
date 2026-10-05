fn app_on_load_idle stm:obj event:str args:etc
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
