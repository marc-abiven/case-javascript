gn wp_download
 let site run wp_site
 let count site.count
 let duration time_now
 let duration time_delay duration
 let o obj count duration
 let s obj_option o

 log "download" s

 let s json_encode site

 db_write s
end
