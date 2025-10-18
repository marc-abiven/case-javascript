fn wp_normalize x:str
 let r dom_unescape x
 let r replace r "#8211" "-"
 let r replace r "#8212" "-"
 let r replace r "#8217" "'"
 let r replace r "#8220" "\""
 let r replace r "#8221" "\""
 let r replace r "#8230" "..."
 let r replace r "« " "\""
 let r replace r " »" "\""
 let r replace r "«" "\""
 let r replace r "»" "\""
 let r replace r " :" ":"

 ret r
end