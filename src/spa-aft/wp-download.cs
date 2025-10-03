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