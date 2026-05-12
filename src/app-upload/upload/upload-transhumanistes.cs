gn upload_transhumanistes upload:bool x:etc
 //site unzip

 fn site_unzip
  let zip "site.zip"

  os_execute "unzip" zip
  fs_remove zip
 end

 //call site unzip

 fn call_site_unzip
  dir_call "res" site_unzip
 end

 //main

 run spa_github upload "transhumanistes" "transhumanistes" call_site_unzip
end
