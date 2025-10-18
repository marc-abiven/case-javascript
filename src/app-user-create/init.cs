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

 let user name
 let o obj user password
 let s obj_option o

 log "create" s

 //save

 let users org_user_load

 let created time_get
 let user get users name

 set user "mail" user_mail
 set user "created" created

 org_user_save users

 //install

 org_user_install name

 //format mail

 let logo "src/lib-org/res/freeserver-sh-2025-09-18-logo-003.png"

 let cid path_file logo

 //common

 let color "green"
 let indent "10vw"
 let spacer h_spacer

 //body

 let html h_html
 let head h_head
 let body h_body

 h_font_family body font_family
 h_font_size body font_size

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
 let wbr h_wbr
 let span2 h_span ".sh"

 let b h_b

 h_push b span1
 h_push b wbr
 h_push b span2

 let ssh h_div

 h_padding_left ssh indent
 h_push ssh b

 //password1

 let password1 h_div "Your password is:"

 //password2

 let b h_b password
 let password2 h_div

 h_padding_left password2 indent
 h_push password2 b

 //wsl

 let wsl h_a "WSL"

 h_href wsl "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux"
 h_decoration wsl "none"
 h_color wsl color

 //putty

 let putty h_a "PuTTY"

 h_href putty "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"
 h_decoration putty "none"
 h_color putty color

 //windows

 let span1 h_span "Under Windows, you can use "
 let span2 h_span " or "
 let span3 h_span " to access the SSH command. "

 let windows h_span

 h_push windows span1
 h_push windows wsl
 h_push windows span2
 h_push windows putty
 h_push windows span3

 //secure shell

 let secure_shell h_a "SSH"

 h_href secure_shell "https://en.wikipedia.org/wiki/Secure_Shell"
 h_decoration secure_shell "none"
 h_color secure_shell color

 //unix

 let span1 h_span "The "
 let span2 h_span " command is provided by the system under MacOS and Linux distributions."

 let unix h_span

 h_push unix span1
 h_push unix secure_shell
 h_push unix span2

 //system

 let system h_div

 h_push system windows
 h_push system unix

 //change password

 let change_password h_div "Once you're logged, you can change your password with the command above:"

 //passwd

 let b h_b "passwd"

 let passwd h_div

 h_padding_left passwd indent
 h_push passwd b

 //first time

 let first_time h_div "If you don't connect to the server a first time before the end of the next seven days, your account will be removed. Then you can restart the account creation procedure with the same mail."

 //question

 let question h_div "If you have some questions, you can reach the administrator (mabynogy) on our discord server."

 //discord

 let a h_a "discord.gg/sgNjtTeDvK"

 h_href a "https://discord.gg/sgNjtTeDvK"
 h_bold a
 h_decoration a "none"
 h_color a color

 let discord h_div

 h_padding_left discord indent
 h_push discord a

 //cheers

 let cheers h_div "Cheers,"

 //mabynogy

 let span1 h_span "mabynogy from "
 let mabynogy h_div

 let a h_a "freeserver.sh"

 h_href a "https://freeserver.sh"
 h_decoration a "none"
 h_color a color

 h_push mabynogy span1
 h_push mabynogy a

 //body

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
 h_push body spacer
 h_push body change_password
 h_push body spacer
 h_push body passwd
 h_push body spacer
 h_push body first_time
 h_push body spacer
 h_push body question
 h_push body spacer
 h_push body discord
 h_push body spacer
 h_push body cheers
 h_push body spacer
 h_push body mabynogy
 h_push html head
 h_push html body

 //send mail user

 let html h_render html

 //log html

 mail user_mail "Your account on FreeServer.sh" html admin logo

 //mail debug

 let data obj name user_mail password

 mail_debug "user-create" data
end
