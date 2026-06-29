fn dom_entities
 //entity

 let result obj

 fn entity x:cool y
  if is_char x
   let n asc x

   ret entity n y
  end

  check is_ushort x

  if is_ushort y
   variant x y

   ret
  end

  //key

  check is_str y

  let key format y
  let c chr x

  put result key c

  variant x
 end

 //variant

 fn variant x:ushort y
  if is_undef y
   ret variant x x

  check is_ushort y

  let c chr x

  //3 digits

  let numeric1 pad_l y "0" 3
  let numeric1 concat "#" numeric1
  let numeric1 format numeric1

  if not has result numeric1
   put result numeric1 c

  //4 digits

  let numeric2 pad_l y "0" 4
  let numeric2 concat "#" numeric2
  let numeric2 format numeric2

  if not has result numeric2
   put result numeric2 c

  //hexa

  let hex to_hex y
  let hex concat "#x" hex
  let hex format hex

  if not has result hex
   put result hex c
 end

 //format

 fn format x:str
  ret concat "&" x ";"
 end

 //main

 //from https://www.ascii-code.com/

 let entities obj
  "excl" 33
  //"quot" 34
  "quot" "'"
  "num" 35
  "dollar" 36
  "percnt" 37
  "amp" 38
  "apos" 39
  "lparen" 40
  "rparen" 41
  "ast" 42
  "plus" 43
  "comma" 44
  "period" 46
  "sol" 47
  "colon" 58
  "semi" 59
  "lt" 60
  "equals" 61
  "gt" 62
  "quest" 63
  "commat" 64
  "lsqb" 91
  "bsol" 92
  "rsqb" 93
  "Hat" 94
  "lowbar" 95
  "grave" 96
  "lcub" 123
  "verbar" 124
  "rcub" 125
  "tilde" 126
  "euro" 8364
  //"sbquo" 130
  "sbquo" ","
  "fnof" 131
  //"bdquo" 132
  "bdquo" "\""
  "hellip" 133
  "dagger" 134
  "Dagger" 135
  "circ" 136
  "permil" 137
  "Scaron" 138
  //"lsaquo" 139
  "lsaquo" "'"
  "OElig" 140
  "Zcaron" 142
  //"lsquo" 145
  "lsquo" "'"
  //"rsquo" 146
  "rsquo" "'"
  //"ldquo" 147
  "ldquo" "\""
  //"rdquo" 148
  "rdquo" "\""
  "bull" 149
  "ndash" 150
  "mdash" 151
  //"tilde" 152
  732 152  //small tilde
  "trade" 153
  "scaron" 154
  //"rsaquo" 155
  "rsaquo" "'"
  "oelig" 156
  "zcaron" 158
  "Yuml" 159
  "nbsp" 160
  "iexcl" 161
  "cent" 162
  "pound" 163
  "curren" 164
  "yen" 165
  "brvbar" 166
  "sect" 167
  "uml" 168
  "copy" 169
  "ordf" 170
  //"laquo" 171
  "laquo" "\""
  "not" 172
  "shy" 173
  "reg" 174
  "macr" 175
  "deg" 176
  "plusmn" 177
  "sup2" 178
  "sup3" 179
  "acute" 180
  "micro" 181
  "para" 182
  "middot" 183
  "cedil" 184
  "sup1" 185
  "ordm" 186
  //"raquo" 187
  "raquo" "\""
  "frac14" 188
  "frac12" 189
  "frac34" 190
  "iquest" 191
  "Agrave" 192
  "Aacute" 193
  "Acirc" 194
  "Atilde" 195
  "Auml" 196
  "Aring" 197
  "AElig" 198
  "Ccedil" 199
  "Egrave" 200
  "Eacute" 201
  "Ecirc" 202
  "Euml" 203
  "Igrave" 204
  "Iacute" 205
  "Icirc" 206
  "Iuml" 207
  "ETH" 208
  "Ntilde" 209
  "Ograve" 210
  "Oacute" 211
  "Ocirc" 212
  "Otilde" 213
  "Ouml" 214
  //"times" 215
  "times" "x"
  "Oslash" 216
  "Ugrave" 217
  "Uacute" 218
  "Ucirc" 219
  "Uuml" 220
  "Yacute" 221
  "THORN" 222
  "szlig" 223
  "agrave" 224
  "aacute" 225
  "acirc" 226
  "atilde" 227
  "auml" 228
  "aring" 229
  "aelig" 230
  "ccedil" 231
  "egrave" 232
  "eacute" 233
  "ecirc" 234
  "euml" 235
  "igrave" 236
  "iacute" 237
  "icirc" 238
  "iuml" 239
  "eth" 240
  "ntilde" 241
  "ograve" 242
  "oacute" 243
  "ocirc" 244
  "otilde" 245
  "ouml" 246
  "divide" 247
  "oslash" 248
  "ugrave" 249
  "uacute" 250
  "ucirc" 251
  "uuml" 252
  "yacute" 253
  "thorn" 254
  "yuml" 255

 forin entities
  if is_numeric k
   let n json_decode k

   entity v n
  else
   entity v k
 end

 ret result
end
