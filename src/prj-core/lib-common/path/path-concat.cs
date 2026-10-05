fn path_concat path:str subpath:str args:etc
 //let path strip_r path "/"
 let path path_unfix path
 let subpath strip_l subpath "/"

 let r concat path "/" subpath

 if is_full args
  ret path_concat r args:etc

 ret r
end
