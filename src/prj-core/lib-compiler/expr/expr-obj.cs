fn expr_obj cpl:obj args:etc
 check every args is_identifier

 let s join args ","

 ret brace s
end
