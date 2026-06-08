fn dom_special_chars x:str
 let r replace x nbsp "&nbsp;"
 let r replace r "\"" "&quot;"
 let r replace r "'" "&apos;"
 let r replace r "<" "&lt;"
 let r replace r ">" "&gt;"

 ret r
end