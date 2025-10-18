fn mail to:str subject:str body:str from paths:etc
 if is_undef from
  ret mail to subject body admin paths:etc

 //single part

 fn single_part to:str subject:str body:str from:str
  let a arr
  let body quoted_printable body

  let s concat "from:" from

  push a s

  let s concat "to:" to

  push a s

  let s concat "subject:" subject

  push a s
  push a "mime-version: 1.0"
  push a "content-type: text/html;charset=utf-8"
  push a "content-transfer-encoding: quoted-printable"
  push a ""
  push a body

  ret join a crlf
 end

 //multi part

 fn multi_part to:str subject:str body:str from:str paths:etc
  let a arr
  let boundary get_boundary body
  let dash_boundary concat "--" boundary
  let end_boundary concat dash_boundary "--"
  let body quoted_printable body

  //header

  let s concat "from:" from

  push a s

  let s concat "to:" to

  push a s

  let s concat "subject:" subject

  push a s
  push a "mime-version: 1.0"

  let s quote boundary
  let s concat "content-type: multipart/related; boundary=" s

  push a s
  push a ""

  //body

  push a dash_boundary
  push a "content-type: text/html; charset=utf-8"
  push a "content-transfer-encoding: quoted-printable"
  push a ""
  push a body
  push a ""

  //files

  for paths
   let base path_base v
   let file path_file v
   let mime mime_type v
   let content file_read v "base64"
   let content chunk_76 content

   push a dash_boundary

   let s space "content-type:" mime

   push a s
   push a "content-transfer-encoding: base64"

   let s2 angle file
   let s concat "content-id: " s2

   push a s

   let s2 quote base
   let s concat "content-disposition: inline; filename=" s2

   push a s

   push a ""
   push a content
  end

  push a end_boundary

  ret join a crlf
 end

 //config

 fn config
  let token app_token "mabynogy"
  let a arr

  push a "account gmail"
  push a "host smtp.gmail.com"
  push a "port 587"
  push a "protocol smtp"
  push a "auth on"

  let s space "from" mailer

  push a s

  let s space "user" mailer

  push a s

  let s space "password" token

  push a s

  push a "tls on"
  push a "tls_starttls on"
  push a "tls_trust_file /etc/ssl/certs/ca-certificates.crt"
  push a "account default: gmail"

  ret join a
 end

 //quoted printable

 fn quoted_printable x:str
  let path path_tmp "qp.txt"

  file_save path x

  let r os_execute "python3" "-m" "quopri" path

  fs_remove path

  ret r
 end

 //chunk 76

 fn chunk_76 x:str
  var input x
  let output arr

  while is_full input
   let s head input 76

   assign input slice input s.length

   push output s
  end

  ret join output crlf
 end

 //get boundary

 fn get_boundary body:str
  while true
   let r random_str 8

   if not contain body r
    ret r
  end
 end

 //main

 let config_content config
 var body_content null

 if is_full paths
  assign body_content multi_part to subject body from paths:etc
 else
  assign body_content single_part to subject body from

 let config_path path_tmp "msmtp.txt"
 let body_path path_tmp "body.txt"

 file_save config_path config_content
 file_save body_path body_content

 let option_file concat "--file=" config_path

 fs_change_mode config_path 384 //600

 let s os_shell "msmtp" "--debug" option_file "--read-recipients" "<" body_path
 let s txt_prepend s " > "

 trace "msmtp"
 trace s

 fs_remove config_path
 fs_remove body_path
end
