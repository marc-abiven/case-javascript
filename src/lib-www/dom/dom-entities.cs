fn dom_entities
 let r obj
 let o obj

 put o "nbsp" " "
 put o "#160" " "
 put o "amp" "&"
 put o "#38" "&"
 put o "lt" "<"
 put o "gt" ">"
 put o "quot" "\""
 put o "#8220" "\""
 put o "#8221" "\""
 put o "« " "\""
 put o " »" "\""
 put o "«" "\""
 put o "»" "\""
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

  if is_identifier k
   let key concat "&" k ";"

   put r key v

   cont
  end

  if match_l k "#"
   let digit strip_l k "#"

   if same digit.length 2
    let key concat "&#0" digit ";"

    put r key v
   end

   let key concat "&" k ";"

   put r key v

   let c to_uint digit
   let c chr c

   if different c v
    put r c v

   cont
  end

  if has r k
   cont

  put r k v
 end

 ret r
end
