fn dir_make x
 check is_str x

 let recursive true
 let option obj recursive

 fs.mkdirSync x option
end
