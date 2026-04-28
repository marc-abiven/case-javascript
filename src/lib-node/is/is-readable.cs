fn is_readable x
 if is_file x
  var fd null

  try
   assign fd fs.openSync x
  catch
   ret false
  end

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

  fs.closeSync fd

  ret true
 elseif is_dir x
  try
   fs.readdirSync x
  catch
   ret false
  end

  ret true
 else
  ret false
end