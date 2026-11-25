fn agglomerate app:str
 let include pkg_init
 let dirs pkg_resolve include app
 let files arr

 for dirs
  for dir_load v
   let ext path_ext v

   if not same ext "cs"
    cont

   let s file_load v
   let s uncomment s

   push files s
  end
 end

 let source join files
 let token count_tokens source
 let home os_home
 let base concat app ".cs"
 let path path_concat home "data/agglomerate" base

 file_save path source

 let o obj app token
 let s obj_option o

 log "agglomerate" s
end