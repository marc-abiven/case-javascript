gn init x:etc
 var count 0
 
 fn site_zip x
  check is_obj x
  
  let data json_dump x
  let json "site.json"
  let zip "site.zip"

  fs_remove zip 
  file_save json data
  os_execute "zip" zip json
  fs_remove json
 end
 
 fn on_timer
  if is_null count
   ret
   
  if different count wp_count
   log "count" wp_count
   
   assign count wp_count
  end  
  
  time_timeout on_timer 2
 end
 
 assign global.wp_count 0
 
 on_timer

 let site run wp_site

 log "count" wp_count
 
 assign count null
 
 dir_call "src/spa-aft/res" site_zip site
 
 log "ok" 
end
