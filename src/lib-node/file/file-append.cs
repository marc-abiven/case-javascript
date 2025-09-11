fn file_append x:str y:str
 //~ check is_str x
 //~ check is_str y

 fs.appendFileSync x y
end
