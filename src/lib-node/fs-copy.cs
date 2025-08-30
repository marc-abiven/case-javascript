fn fs_copy x y
 check is_str x
 check is_str y

 if is_file x
  if is_dir y
   let base path_base x
   let path path_concat y base

   fs_copy x path

   ret
  end
 end

 let force true
 let recursive true
 let o obj force recursive

 fs.cpSync x y o
end