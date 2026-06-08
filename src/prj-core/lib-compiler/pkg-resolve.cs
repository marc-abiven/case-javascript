fn pkg_resolve include:obj package:str
 //resolve

 fn resolve include:obj package:str
  let packages arr

  if has include package
   for get include package
    let a resolve include v

    append packages a
   end
  end

  push packages package

  ret dedup packages
 end

 //get path

 fn get_path package:str prefix:str
  for dir_read "src" true
   let base concat prefix "-" package
   let path path_concat v base

   if is_dir path
    ret path
  end

  ret null
 end

 //main

 let r arr

 //resolve

 let packages resolve include package

 //paths

 for dedup packages
  //lib

  let path get_path v "lib"

  if is_str path
   push r path

   cont
  end

  //app

  let path get_path v "app"

  if is_str path
   push r path

   cont
  end

  //spa

  let path get_path v "spa"

  if is_str path
   push r path

   cont
  end

  //any

  stop
 end

 ret r
end
