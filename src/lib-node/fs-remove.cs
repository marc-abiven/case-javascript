fn fs_remove x
 check is_str x

 let force true
 let recursive true
 let o obj force recursive

 fs.rmSync x o
end