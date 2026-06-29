fn url_get x:etc
 //node

 if is_node
  ret http_get x:etc

 //browser

 if is_browser
  ret xhr_get x:etc

 //any

 stop
end