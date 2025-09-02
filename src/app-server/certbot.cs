fn certbot
 fn load_config
  let file "certbot.txt"
  let data obj

  if is_file file
   let o file_read file
   let o json_decode o

   merge data o
  end

  forof get_domains
   if not has data v
    put data v 0
  end

  ret obj file data
 end

 fn get_domains
  let r arr

  if is_remote
   push r "mabynogy.org"
  else
   push r "mabynogy.hd.free.fr"

  ret r
 end

 let r obj
 let config load_config
 let data config.data

 forin data
  let v get data k
  let now time_get
  let now trunc now
  let refresh add v day

  if gt refresh now
   cont

  let s os_execute "sudo" "certbot" "certonly" "--standalone" "--email" author "--agree-tos" "--keep-until-expiring" "--domain" k
  let s txt_prepend s " > "

  trace k
  trace s

  set data k now
 end

 let s json_dump data

 file_save config.file s

 forin data
  let key path_concat "/etc/letsencrypt/live" k "privkey.pem"
  let cert path_concat "/etc/letsencrypt/live" k "fullchain.pem"

  let key os_execute "sudo" "cat" key
  let cert os_execute "sudo" "cat" cert

  let o obj key cert

  put r k o
 end

 ret r
end