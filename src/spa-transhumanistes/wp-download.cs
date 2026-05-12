gn wp_download
 let site run wp_site
 let count site.count
 let duration time_now
 let duration time_delay duration
 let o obj count duration
 let s obj_option o

 log "download" s

 run db_write site
end
