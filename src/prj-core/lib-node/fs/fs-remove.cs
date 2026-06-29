fn fs_remove x:str
 let force true
 let recursive true
 let o obj force recursive

 fs.rmSync x o
end
