fn init x:etc

 var n 1

 while true
  let date date_str
  let date replace date "/" "-"
  let digit pad_l n
  let base concat "case-javascript-" date "-" digit ".zip"
  let dir "/home/mabynogy/Documents/backup"
  let path path_concat dir base

  if is_file path
   assign n inc n
   cont
  end

  log path
  os_system "zip" "--recurse-paths" path "."
  brk
 end

end