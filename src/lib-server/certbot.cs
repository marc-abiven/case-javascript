fn certbot domains:etc
 //load config

 fn load_config
  let file "certbot.txt"
  let data obj

  if is_file file
   let o file_load file
   let o json_decode o

   obj_merge data o
  end

  for domains
   if not has data v
    put data v 0
  end

  ret obj file data
 end

 //get expiry dates

 fn get_expiry_dates
  let r obj
  let lines sudo os_execute "certbot" "certificates"
  let lines trim lines
  let lines split lines

  while is_full lines
   let line shift lines
   let line trim line
   let line to_lower line

   if not match_l line "domains:"
    cont

   let domain strip_l line "domains:"
   let domain trim domain

   let date shift lines
   let date trim date
   let date to_lower date
   let date trim date
   let date strip_l date "expiry date:"
   let date trim date
   let a split date " "
   let date shift a
   let time shift a
   let date space date time
   let date date_decode date

   put r domain date
  end

  ret r
 end

 //main

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

  let s sudo os_execute "certbot" "certonly" "--standalone" "--email" author "--agree-tos" "--keep-until-expiring" "--domain" k
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

  let key sudo_file_read key
  let cert sudo_file_read cert

  let o obj key cert

  put r k o
 end

 //display expiry certificate dates

 let expiries get_expiry_dates

 forin expiries
  let v get expiries k
  let domain k
  let date time_hn v  
  let o obj domain date
  let s obj_option o

  log "expiry" s
 end

 ret r
end
