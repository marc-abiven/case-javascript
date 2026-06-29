fn dir_make dir:str
 let recursive true
 let option obj recursive

 //no_umask fs.mkdirSync dir option

 fs.mkdirSync dir option

 fs_writable dir
end