gn download
 gn wp_download 
  let site run wp_site
  let count concat "count=" site.count
  let duration time_now
  let duration time_delay duration
  let duration to_lit duration
  let duration concat "duration=" duration

  log "download" count duration

  let s json_encode site
  
  db_write s
 end
 
 assign global.wp_count 0
 
 //run db_remove
 
 if not run db_exist
  let site run url_get "res/site.json"
 
  run db_create
  run db_write site
  gn_run wp_download
  
  ret site
 end

 let site run db_read
 
 gn_run wp_download
 
 ret site
end
