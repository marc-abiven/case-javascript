fn app_list
 let r obj
 let include pkg_init

 forin include
  let paths pkg_resolve include k
  let path back paths
  let base path_base path

  if match_l base "app-"
   put r k path
 end

 ret r
end