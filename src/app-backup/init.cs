fn init x:etc
 let path os_home
 let path path_concat path "Documents/backup/case-javascript.zip"
 let path archive_find path

 os_system "zip" "--recurse-paths" "-9" path "."
end