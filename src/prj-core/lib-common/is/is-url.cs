fn is_url x
 if not is_ln x
  ret false

 let s to_lower x

 if match_l s "http://"
 elseif match_l s "https://"
 else
  ret false

 try
  url_parse x
 catch
  ret false
 end

 ret true
end