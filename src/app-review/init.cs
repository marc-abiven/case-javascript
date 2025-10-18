gn init x y:etc
 //compare base
 
 fn compare_base x y
  let basex path_base x
  let basey path_base y

  ret cmp basex basey
 end
 
 //main

 let a arr

 for dir_load "src"
  let ext path_ext v

  if different ext "cs"
   cont

  push a v
 end

 var n null

 if is_undef x
  let percent 15

  assign n mul percent a.length
  assign n div n 100
  assign n trunc n
 elseif is_str x
  assign n to_uint x
 else
  stop

 let a shuffle a
 let a head a n

 sort a compare_base

 for a
  log i v
  os_system "geany" v
 end
end
