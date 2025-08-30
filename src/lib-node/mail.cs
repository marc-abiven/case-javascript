fn mail to subject body from
 check is_str to
 check is_str subject
 check is_str body

 if is_undef from
  ret mail to subject body "mabynogy@gmail.com"

 let token app_token "mabynogy"

 let cfg arr

 push cfg "account gmail"
 push cfg "host smtp.gmail.com"
 push cfg "port 587"
 push cfg "protocol smtp"
 push cfg "auth on"

 let s space "from" from

 push cfg s

 let s space "user" from

 push cfg s

 let s space "password" token

 push cfg s

 push cfg "tls on"
 push cfg "tls_starttls on"
 push cfg "tls_trust_file /etc/ssl/certs/ca-certificates.crt"
 push cfg "account default: gmail"

 let body2 arr

 let s concat "from:" from

 push body2 s

 let s concat "to:" to

 push body2 s

 let s concat "subject:" subject

 push body2 s
 push body2 "mime-version:1.0"
 push body2 "content-type:text/html;charset=utf-8"
 push body2 ""
 push body2 body

 let cfg join cfg
 let body join body2

 let cfg_path path_tmp "msmtp.txt"
 let body_path path_tmp "body.txt"

 file_save cfg_path cfg
 file_save body_path body

 let option_file concat "--file=" cfg_path

 os_system "chmod" 600 cfg_path

 let s os_shell "msmtp" "--debug" option_file "--read-recipients" "<" body_path
 let s txt_prepend s " > "

 //trace "msmtp"
 //trace s

 fs_remove cfg_path
 fs_remove body_path
end
