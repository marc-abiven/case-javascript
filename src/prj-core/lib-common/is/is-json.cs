fn is_json x
 if not is_str x
  ret false

 if is_empty x
  ret false

 try
  json_decode x
 catch
  ret false
 end

 ret true
end