fn is_readable x
 //file

 if is_file x
  //open

  var fd null

  try
   assign fd fs.openSync x
  catch
   ret false
  end

  //try to read one byte

  let n file_size x

  if gt n 0
   let buffer Buffer.alloc 1

   try
    fs.readSync fd buffer
   catch
    fs.closeSync fd

    ret false
   end
  end

  //close

  fs.closeSync fd

  ret true
 end

 //directory

 if is_dir x
  try
   fs.readdirSync x
  catch
   ret false
  end

  ret true
 end

 //any

 ret false
end