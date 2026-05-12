fn pkg_depend pkg:str
 let r arr
 let pkgs pkg_list
 let depends pkg_resolve pkg "depend.txt"

 drop depends

 for depends
  let pkg find pkgs v

  push r pkg
 end

 ret r
end