fn digest x:str
 let tmp path_tmp

 file_save tmp x

 let r os_execute "sha256sum" "--binary" tmp

 fs_remove tmp

 let r split r " "
 let r front r

 ret r
end
