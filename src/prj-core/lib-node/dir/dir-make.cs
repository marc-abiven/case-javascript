fn dir_make path:str
 let recursive true
 let option obj recursive

 fs.mkdirSync path option

 fs_writable path
end
