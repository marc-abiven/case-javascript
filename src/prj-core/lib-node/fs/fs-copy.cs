fn fs_copy source:str target:str
 if is_file source
  if is_dir target
   let base path_base source
   let path path_concat target base

   fs_copy source path

   ret
  end
 end

 let force true
 let recursive true
 let option obj force recursive

 fs.cpSync source target option
end
