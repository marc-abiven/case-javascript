fn app_on_dead_zombie stm:obj event:str callback:str args:etc
 let app meta.app
 let o obj app callback args
 let s obj_option o

 stm_log stm "zombie" s
end
