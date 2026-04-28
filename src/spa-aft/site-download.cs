gn site_download
 assign global.wp_count 0

 let json "res/site.json"

 //run db_remove

 if not run db_exist
  let site run url_get json

  run db_create
  run db_write site
  task_run wp_download

  ret site
 end

 let created run xhr_get "res/site-created.json"
 let site run db_read

 if gt created site.created
  let site run url_get json

  run db_write site
 end

 ret site
end
