fn init x:etc
 fn beautify x:str
  let s trim_r x
  let a arr

  for split s
   let s trim_r v

   push a s
  end

  ret join a
 end

 for dir_load "src"
  let ext path_ext v
  var process false

  if same ext "cs"
   assign process true

  if same ext "txt"
   assign process true

  if not process
   cont

  let s1 file_load v
  let s2 beautify s1

  if same s1 s2
   cont

  log v

  file_save v s2
 end
end
