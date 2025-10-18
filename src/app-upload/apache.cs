fn apache
 //robot

 let robot_path path_concat www "robots.txt"
 let robot_content "User-agent: *\nDisallow: /"

 file_save robot_path robot_content
 
 //favicon
 
 fs_copy "src/spa-cv/res/favicon.ico" www
end
