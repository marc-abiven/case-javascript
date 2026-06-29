fn init x:etc
 let home os_home
 let version cpl_version
 let version concat "v" version
 let path path_concat home "data/backup/case-javascript.zip"
 let path archive_find path version

 zip path "."
end
