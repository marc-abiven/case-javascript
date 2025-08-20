fn init x:etc
 let a arr

 forof dir_load "src"
  let ext path_ext v

  if different ext "cs"
   cont

  push a v
 end

 let percent 15
 let n mul percent a.length
 let n div n 100
 let n trunc n
 let a shuffle a
 let a head a n

 forin a
  let i to_i k
  let v at a i
  log i v
  os_system "geany" v
 end
end