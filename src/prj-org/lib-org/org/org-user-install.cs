fn org_user_install user:str
 //install prompt

 fn install_prompt path:str
  let prompt get_prompt
  let prompt quote prompt
  let prompt concat "PS1=" prompt

  config_clean path
  config_append path prompt
  config_append path "export PS1"
 end

 //get prompt

 fn get_prompt
  let red rgb_init 5 0 0
  let yellow rgb_init 5 5 0

  let time ps1_encode "\\t" yellow "black"
  var user null

  if is_root
   assign user ps1_encode "\\u" red "default" "bold"
  else
   assign user ps1_encode "\\u" "green" "default" "bold"

  let host ps1_encode "\\h" "blue" "default" "bold"
  let login concat user "@" host
  let path ps1_encode "\\w" "cyan" "default" "bold"
  let path concat path " $ "

  ret space time login path
 end

 //main

 install_prompt "/root/.bashrc"

 let home os_home user
 let bashrc path_concat home ".bashrc"

 check sudo_is_file bashrc

 install_prompt bashrc
end
