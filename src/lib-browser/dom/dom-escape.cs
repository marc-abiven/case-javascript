fn dom_escape x
 check is_str x
 
 let r replace x "&" "&amp;"
 let r replace r "<" "&lt;"
 let r replace r ">" "&gt;"
 let r replace r "&" "&amp;"
 let r replace r "\"" "&quot;"
 let r replace r "'" "&#39;"
 
 ret r
end
