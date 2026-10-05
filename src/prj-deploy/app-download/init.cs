gn init x:etc
 //site save

 var count 0

 fn site_save x:obj
  let data cson_encode x
  let data json_dump x
  let json "site.json"
  let archive "site.zip"

  fs_remove archive
  file_save json data
  zip os_execute archive json
  fs_remove json

  let data cson_encode x.created

  file_save "site-created.cson" data
 end

 //on timer

 fn on_timer
  if is_null count
   ret

  if different count wp_count
   log "count" wp_count

   assign count wp_count
  end

  time_timeout on_timer 2
 end

 //main

 assign wp_count 0 //global

 on_timer

 let site run wp_site

 log "count" wp_count

 assign count null

 dir_call "src/prj-aft/spa-transhumanistes/res" site_save site

 log "ok"
end
