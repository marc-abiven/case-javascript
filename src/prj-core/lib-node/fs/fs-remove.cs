fn fs_remove path:str
 let force true
 let recursive true
 let o obj force recursive

 fs.rmSync path o
end
