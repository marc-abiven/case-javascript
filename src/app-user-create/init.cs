fn init name:str user_mail:str x:etc
 //main

 org_group_create_users
 org_user_remove_unused
 
 //exists
 
 check is_alnum name
 check is_mail user_mail
 
 assign name to_lower name
 assign user_mail to_lower user_mail
 
 let users org_user_load
 
 if has users name
  let name to_lit name
  
  log "User" name "already exists."
  
  ret
 end
 
 forin users
  let v get users k
  
  if same v.mail user_mail
   let name to_lit v.name
   let mail to_lit user_mail
   
   log "Mail" mail "already set for user" name "."
   
   ret
  end
 end
 
 //shell
 
 let shell os_user
 let shell get users shell
 let shell shell.shell
 
 //create user
 
 sudo "useradd" "--create-home" name "--shell" shell
 
 //group users

 sudo "usermod" "--append" "--groups" "users" name
 
 //set password
 
 let password password true
 let pair concat name ":" password
 let pair to_lit pair
 
 os_shell "echo" pair "|" "sudo" "chpasswd"

 let user to_lit name
 let user concat "user=" user
 
 let password to_lit password
 let password concat "password=" password

 log "create" user password
 
 //save
 
 let users org_user_load

 let created time_get
 let user get users name
 
 set user "mail" user_mail
 set user "created" created
 
 org_user_save users
 
 //send mail
 
 let logo "src/lib-org/res/freeverver-sh-2025-09-16-logo.png"
 let cid path_file logo
 
 let spacer "<div>nbsp;</div>"
 
 let style concat "font-family:" font_family ";font-size:" font_size
 let style to_lit style
 let body_open concat "<body style=" style ">"
 
 let style to_lit "float:left"
 let img to_lit cid
 let img concat "<img src=" img " style=" style ">"
 
 let ssh concat name "@freeserver.sh"
 let ssh space "ssh" ssh
 let center to_lit "text-align:center"
 let ssh concat "<div style=" center ">" ssh "</div>"
 
 let discord ""
 let discord concat "<div style=" center ">" discord "</div>"
 
 let html arr

 push html "<!doctype html>"
 push html "<html>"
 push html body_open
 push html img
 push html "<div>Welcome to <b>FreeServer.sh<b> !</div>"
 push html spacer
 push html "<div>Your account is ready to be used. You can now login with the following command.</div>"
 push html spacer
 push html ssh
 push html spacer
 push html "<div>If you have some questions, you can reach the administrator (mabynogy) on our discord server.</div>"
 push html discord
 push html spacer
 push html "<div>Cheers,</div>"
 push html spacer
 push html "<div>mabynogy</div>"
 push html "</body>"
 push html "</html>"

 let html join html
 
 mail user_mail "Your account on FreeServer.sh" html
end
