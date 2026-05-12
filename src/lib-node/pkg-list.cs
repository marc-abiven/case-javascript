fn pkg_list dir
 if is_undef dir
  ret pkg_list "src"

 let pkgs obj

 for dir_read dir true
  //top level packages

  let base path_base v

  if match_l base "app"
   let name strip_l base "app-"

   put pkgs name v
  elseif match_l base "spa"
   let name strip_l base "spa-"

   put pkgs name v
  elseif match_l base "lib"
   let name strip_l base "lib-"

   put pkgs name v
  elseif match_l base "prj"
   //packages in a project

   let o pkg_list v

   forin o
    let v get o k

    //names are uniques across home and projects

    put pkgs k v
   end
  end
 end

 ret sort pkgs
end