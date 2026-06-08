fn dir_make x:str
 let recursive true
 let option obj recursive

 no_umask fs.mkdirSync x option
end
