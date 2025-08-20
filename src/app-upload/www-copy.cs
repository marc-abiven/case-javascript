fn www_copy x
 check is_str x

 let robot "User-agent: *\nDisallow: /"
 let base path_base x
 let base_target path_concat www base

 if is_dir base_target
  erase base_target

 os_system "sudo" "cp" "--recursive" x www
 os_system "sudo" "chmod" "--recursive" "777" www

 file_save "/var/www/html/robots.txt" robot
end