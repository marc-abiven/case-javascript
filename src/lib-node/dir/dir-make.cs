fn dir_make x:str
 let recursive true
 let option obj recursive

 fs.mkdirSync x option
end
