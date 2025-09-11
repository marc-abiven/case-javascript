fn is_link x
 if not is_obj x
  ret false

 if not is_str x.url
  ret false

 if not is_str x.title
  ret false

 ret true
end