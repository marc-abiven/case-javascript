fn app_home x
 check is_str x
 
 let lines arr
 let js app_make x
 
 push lines "<!doctype html>"
 push lines "<html>"
 push lines "<head>"
 push lines "<meta charset=\"utf-8\">"
 push lines "</head>"
 push lines "<body>"
 push lines "<script>"
 push lines js
 push lines "</script>"
 push lines "</body>"
 push lines "</html>"
 
 ret join lines
end
