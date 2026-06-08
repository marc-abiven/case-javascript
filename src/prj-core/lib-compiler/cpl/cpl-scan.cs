fn cpl_scan cpl:obj str:str
 //parse lit

 fn parse_lit result:obj str:str
  //if contain str "//" //comment
  // ret false

  let begin find str "\""

  if lt begin 0
   ret false

  let end back str

  if different end "\""
   ret false

  let right slice str begin

  if not is_lit right
   ret false

  let left slice_l str begin

  assign result.tokens scan left
  push result.tokens right
  assign result.tokens reject result.tokens is_blank

  ret true
 end

 //parse complex

 fn parse_complex result:obj str:str
  var complex false

  if contain str "//" //comment
   assign complex true
  elseif contain str "\"" //literal
   assign complex true

  if not complex
   ret false

  assign result.tokens scan str
  assign result.tokens reject result.tokens is_trivia

  ret true
 end

 //parse split

 fn parse_split result:obj str:str
  assign result.tokens split str " "
  assign result.tokens reject result.tokens is_blank

  ret true
 end

 //main

 //cached

 let str trim str
 let scans cpl.cache.scans

 if has scans str
  let tokens get scans str

  ret dup tokens
 end

 //scan

 let result obj
 var cache false

 if parse_lit result str
  //lit

  assign cache true
 elseif parse_complex result str
  //complex

  assign cache true
 elseif parse_split result str
  //split
 else
  stop

 //cache

 if cache
  let tokens dup result.tokens

  put scans str tokens
 end

 ret result.tokens
end
