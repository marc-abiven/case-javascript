fn url_get x:etc
 if is_node
  ret http_get x:etc
 elseif is_browser
  ret xhr_get x:etc
 else
  stop
end
