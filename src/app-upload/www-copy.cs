fn www_copy x:str
 let robot "User-agent: *\nDisallow: /"
 let base path_base x
 let base_target path_concat www base

 if is_dir base_target
  erase base_target

 sudo "cp" "--recursive" x www
 sudo "chmod" "--recursive" "777" www

 file_save "/var/www/html/robots.txt" robot
end
