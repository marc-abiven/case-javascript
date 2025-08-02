fn dir_make x
 check is_str x
 
 let recursive true
 let o obj recursive

 fs.mkdirSync x o
end
