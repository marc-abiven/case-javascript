fn dir_remove x
 check is_str x
 
 let recursive true
 let o obj recursive

 fs.rmdirSync x o
end
