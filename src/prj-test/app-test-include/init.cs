fn init x:etc
 let include pkg_init

 dump include

 forin include
  let paths pkg_resolve include k

  dump k
  dump paths
  log
 end
end
