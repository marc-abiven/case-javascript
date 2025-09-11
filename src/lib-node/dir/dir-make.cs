fn dir_make x:str
 //~ check is_str x

 let recursive true
 let option obj recursive

 fs.mkdirSync x option
end
