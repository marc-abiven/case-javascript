fn app_list
 let r obj
 let pkgs pkg_list

 forin pkgs
  let v get pkgs k
  let base path_base v

  if match_l base "app-"
   put r k v
  elseif match_l base "spa-"
   put r k v
 end

 ret r
end