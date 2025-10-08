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

 entity 33	"excl"
 //entity 34	"quot"
 entity "'"	"quot"
 entity 35	"num"
 entity 36	"dollar"
 entity 37	"percnt"
 entity 38	"amp"
 entity 39	"apos"
 entity 40	"lparen"
 entity 41	"rparen"
 entity 42	"ast"
 entity 43	"plus"
 entity 44	"comma"
 entity 46	"period"
 entity 47	"sol"
 entity 58	"colon"
 entity 59	"semi"
 entity 60	"lt"
 entity 61	"equals"
 entity 62	"gt"
 entity 63	"quest"
 entity 64	"commat"
 entity 91	"lsqb"
 entity 92	"bsol"
 entity 93	"rsqb"
 entity 94	"Hat"
 entity 95	"lowbar"
 entity 96	"grave"
 entity 123	"lcub"
 entity 124	"verbar"
 entity 125	"rcub"
 entity 126	"tilde"
 entity 8364	"euro"
 //entity 130	"sbquo"
 entity ","	"sbquo"
 entity 131	"fnof"
 //entity 132	"bdquo"
 entity "\""	"bdquo"
 entity 133	"hellip"
 entity 134	"dagger"
 entity 135	"Dagger"
 entity 136	"circ"
 entity 137	"permil"
 entity 138	"Scaron"
 //entity 139	"lsaquo"
 entity "'"	"lsaquo"
 entity 140	"OElig"
 entity 142	"Zcaron"
 //entity 145	"lsquo"
 entity "'"	"lsquo"
 //entity 146	"rsquo"
 entity "'"	"rsquo"
 //entity 147	"ldquo"
 entity "\""	"ldquo"
 //entity 148	"rdquo"
 entity "\""	"rdquo"
 entity 149	"bull"
 entity 150	"ndash"
 entity 151	"mdash"
 //entity 152	"tilde"
 entity 152	732 //small tilde
 entity 153	"trade"
 entity 154	"scaron"
 //entity 155	"rsaquo"
 entity "'"	"rsaquo"
 entity 156	"oelig"
 entity 158	"zcaron"
 entity 159	"Yuml"
 entity 160	"nbsp"
 entity 161	"iexcl"
 entity 162	"cent"
 entity 163	"pound"
 entity 164	"curren"
 entity 165	"yen"
 entity 166	"brvbar"
 entity 167	"sect"
 entity 168	"uml"
 entity 169	"copy"
 entity 170	"ordf"
 //entity 171	"laquo"
 entity "\""	"laquo"
 entity 172	"not"
 entity 173	"shy"
 entity 174	"reg"
 entity 175	"macr"
 entity 176	"deg"
 entity 177	"plusmn"
 entity 178	"sup2"
 entity 179	"sup3"
 entity 180	"acute"
 entity 181	"micro"
 entity 182	"para"
 entity 183	"middot"
 entity 184	"cedil"
 entity 185	"sup1"
 entity 186	"ordm"
 //entity 187	"raquo"
 entity "\""	"raquo"
 entity 188	"frac14"
 entity 189	"frac12"
 entity 190	"frac34"
 entity 191	"iquest"
 entity 192	"Agrave"
 entity 193	"Aacute"
 entity 194	"Acirc"
 entity 195	"Atilde"
 entity 196	"Auml"
 entity 197	"Aring"
 entity 198	"AElig"
 entity 199	"Ccedil"
 entity 200	"Egrave"
 entity 201	"Eacute"
 entity 202	"Ecirc"
 entity 203	"Euml"
 entity 204	"Igrave"
 entity 205	"Iacute"
 entity 206	"Icirc"
 entity 207	"Iuml"
 entity 208	"ETH"
 entity 209	"Ntilde"
 entity 210	"Ograve"
 entity 211	"Oacute"
 entity 212	"Ocirc"
 entity 213	"Otilde"
 entity 214	"Ouml"
 //entity 215	"times"
 entity "x"	"times"
 entity 216	"Oslash"
 entity 217	"Ugrave"
 entity 218	"Uacute"
 entity 219	"Ucirc"
 entity 220	"Uuml"
 entity 221	"Yacute"
 entity 222	"THORN"
 entity 223	"szlig"
 entity 224	"agrave"
 entity 225	"aacute"
 entity 226	"acirc"
 entity 227	"atilde"
 entity 228	"auml"
 entity 229	"aring"
 entity 230	"aelig"
 entity 231	"ccedil"
 entity 232	"egrave"
 entity 233	"eacute"
 entity 234	"ecirc"
 entity 235	"euml"
 entity 236	"igrave"
 entity 237	"iacute"
 entity 238	"icirc"
 entity 239	"iuml"
 entity 240	"eth"
 entity 241	"ntilde"
 entity 242	"ograve"
 entity 243	"oacute"
 entity 244	"ocirc"
 entity 245	"otilde"
 entity 246	"ouml"
 entity 247	"divide"
 entity 248	"oslash"
 entity 249	"ugrave"
 entity 250	"uacute"
 entity 251	"ucirc"
 entity 252	"uuml"
 entity 253	"yacute"
 entity 254	"thorn"
 entity 255	"yuml"

 ret result
end