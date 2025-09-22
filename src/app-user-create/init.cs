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

 let s to_lit password
 let s concat "password=" s

 log "create" user s

 //save

 let users org_user_load

 let created time_get
 let user get users name

 set user "mail" user_mail
 set user "created" created

 org_user_save users

 //send mail

 let logo "src/lib-org/res/freeserver-sh-2025-09-18-logo-003.png"

 let cid path_file logo
 
 begin 
  let spacer h_spacer
  let s repeat "&nbsp;" 8
  let indent h_span
  
  h_text indent s
  
  let html h_html
  let body h_body
  
  h_font_family body font_family
  h_font_size body font_family
  
  //logo
  
  let src concat "cid:" cid
  let img h_img
  
  h_src img src
  h_width img "12vw"
  h_float img "right"
  
  //welcome
  
  let span1 h_span "Welcome to "
  let b h_b "FreeServer.sh"
  let span2 h_span " !" 
  let welcome h_div
  
  h_push welcome span1
  h_push welcome b
  h_push welcome span2
  
  //login
  
  let login h_div "Your account is ready to be used. You can now login with the following command."
  
  //ssh
  
  let s1 concat "ssh " name "@freeserver"

  let span1 h_span s1
  let wbr h_init "wbr"
  let span2 h_span ".sh"
  
  let ssh h_div
  
  h_push ssh indent
  h_push ssh span1
  h_push ssh wbr
  h_push ssh span2
  
  //password1
  
  let password1 h_div "Your password is:"
  
  //password2
  
  let b h_b password
  let password2 h_div
  
  h_push password2 indent
  h_push password2 b
  
  //wsl
  
  let wsl h_a "WSL"
  
  h_href wsl "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux"
  h_decoration wsl "none"
  h_color wsl "green"
  
  //putty

  let putty h_a "PuTTY"
  
  h_href putty "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"
  h_decoration putty "none"
  h_color putty "green"
  
  //secure shell

  let secure_shell h_a "SSH"
  
  h_href secure_shell "https://en.wikipedia.org/wiki/Secure_Shell"
  h_decoration secure_shell "none"
  h_color secure_shell "green"
  
  //windows
  
  let span1 h_span "Under Windows, you can use "
  let span2 h_span " or "
  let span2 h_span " to access the SSH command. "
    
  let windows h_span
  
  h_push windows span1
  h_push windows wsl
  h_push windows span2
  h_push windows putty
  
  //unix

  let span1 h_span "The "
  let span2 h_span " command is provided by the system under MacOS and Linux distributions."
  
  let unix h_span
  
  h_push unix span1
  h_push unix secure_shell
  h_push unix span2
  
  let system h_div
  
  h_push system windows
  h_push system unix
    
      
  h_push body img
  h_push body welcome
  h_push body spacer
  h_push body login
  h_push body spacer
  h_push body ssh
  h_push body spacer
  h_push body password1
  h_push body spacer
  h_push body password2
  h_push body spacer
  h_push body system
  h_push html body
 end
 
 
 

 let spacer "<div>&nbsp;</div>"

 let indent repeat "&nbsp;" 8

 let font concat "font-family:" font_family "; font-size:" font_size
 let width_float to_lit "width:12vw; float:right"

 let decoration "text-decoration:none; color:green"
 let decoration to_lit decoration

 let font to_lit font
 let body_open concat "<body style=" font ">"

 let img concat "cid:" cid
 let img to_lit img
 let img concat "<img src=" img " style=" width_float ">"

 let ssh concat name "@freeserver<wbr>.sh"
 let ssh space "<b>ssh" ssh "</b>"
 let ssh concat "<div>" indent ssh "</div>"

 let password concat "<div>" indent "<b>" password "</b></div>"

 let discord "https://discord.gg/sgNjtTeDvK"
 let discord to_lit discord
 let discord concat "<a href=" discord " style=" decoration ">" "discord.gg/sgNjtTeDvK</a>"
 let discord concat "<div>" indent discord "</div>"

 let wsl to_lit "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux"
 let wsl concat "<a href=" wsl " style=" decoration ">WSL</a>"

 let putty to_lit "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"
 let putty concat "<a href=" putty " style=" decoration ">PuTTY</a>"

 let secure_shell to_lit "https://en.wikipedia.org/wiki/Secure_Shell"
 let secure_shell concat "<a href=" secure_shell " style=" decoration ">SSH</a>"

 let windows space "Under Windows, you can use" wsl "or" putty "to access the SSH command."
 let unix space "The" secure_shell "command is provided by the system under MacOS and Linux distributions."

 let system space windows unix
 let system concat "<div>" system "</div>"

 let change_password "<div>Once you're logged, you can change your password with the command above:</div>"

 let passwd concat "<div>" indent "<b>passwd</b></div>"

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
 push html "<div>Your password is:</div>"
 push html spacer
 push html password
 push html spacer
 push html system
 push html spacer
 push html change_password
 push html spacer
 push html passwd
 push html spacer
 push html "<div>If you don't connect to the server a first time before the end of the next seven days, your account will removed. Then you can restart the account creation procedure with the same mail.</div>"
 push html spacer
 push html "<div>If you have some questions, you can reach the administrator (mabynogy) on our discord server.</div>"
 push html spacer
 push html discord
 push html spacer
 push html "<div>Cheers,</div>"
 push html spacer
 push html "<div>mabynogy</div>"
 push html "</body>"
 push html "</html>"

 let html join html

 mail user_mail "Your account on FreeServer.sh" html admin logo
 mail mailer "Your account on FreeServer.sh" html admin logo
end
