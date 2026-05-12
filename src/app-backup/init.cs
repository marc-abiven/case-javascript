fn init x:etc
 let home os_home
 let path path_concat home "data/backup/case-javascript.zip"
 let path archive_find path

 os_system "zip" "--recurse-paths" "-9" path "."
end
