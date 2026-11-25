fn init app args:etc
 let list arr

 let apps app_list
 let apps obj_keys apps

 if is_def app
  push list app
 else
  append list apps

 let home os_home
 let dir path_concat home "data/agglomerate"

 fs_remove dir

 for list
  agglomerate v
 end
end