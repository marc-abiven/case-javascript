fn dom_entities
 let r obj
 let o obj
 
 put o "nbsp" " "
 put o "amp" "&" 
 put o "#38" "&"
 put o "lt" "<"
 put o "gt" ">"
 put o "quot" "\""
 put o "#8220" "\""
 put o "#8221" "\""
 put o "apos" "'"
 put o "rsquo" "'" 
 put o "#39" "'"
 put o "#8217" "'"
 put o "#8211" "-"
 put o "#8212" "-" 
 put o "#8230" "..."
 put o "#124" "|"
 put o "#215" "x"
 put o "eacute" "é"
 put o "#233" "é"
 
 forin o
  let v get o k
  let key concat "&" k ";"
  
  put r key v
  
  if not match_l k "#"
   cont

  if gt k.length 3
   cont

  let key strip_l k "#"
  let key concat "&#0" key ";"
  
  put r key v
 end  
 
 ret r
end
