fn wp_title x:obj
 if has x "title"
  ret x.title
 elseif has x "name"
  ret x.name
 else
  stop
end
