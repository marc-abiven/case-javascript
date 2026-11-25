fn unaccent x:str
 let map obj
  "à" "a"
  "â" "a"
  "ä" "a"
  "æ" "ae"
  "ç" "c"
  "é" "e"
  "è" "e"
  "ê" "e"
  "ë" "e"
  "î" "i"
  "ï" "i"
  "ô" "o"
  "ö" "o"
  "œ" "oe"
  "ù" "u"
  "û" "u"
  "ü" "u"
  "ÿ" "y"
  "À" "A"
  "Â" "A"
  "Ä" "A"
  "Æ" "AE"
  "Ç" "C"
  "É" "E"
  "È" "E"
  "Ê" "E"
  "Ë" "E"
  "Î" "I"
  "Ï" "I"
  "Ô" "O"
  "Ö" "O"
  "Œ" "OE"
  "Ù" "U"
  "Û" "U"
  "Ü" "U"
  "Ÿ" "Y"
 end

 var r x

 forin map
  assign r replace r k v
 end

 ret r
end
