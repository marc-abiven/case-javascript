fn user_init
 fn config_install path:str
  config_clean path

  let cmd os_execute "which" "cmd-user-init"
  let cmd space cmd "--quiet"
  let cmd paren cmd
  let cmd concat "eval $" cmd

  config_append path cmd
 end

 fn config_clean path:str
  let inputs sudo_read path
  let inputs split inputs
  let outputs arr

  forof inputs
   let parts split v "#"

   if is_empty parts
    push outputs v

    cont
   end

   let tag back parts

   if different tag "cmd-user-init"
    push outputs v

    cont
   end

   trace "skip>" v
  end

  let content join outputs

  sudo_save path content
 end

 fn config_append path:str line:str
  check is_ln line

  let content sudo_read path
  let parts arr

  if not match_r content lf
   push parts lf

  let line pad_r line " " 100

  push parts line
  push parts " #cmd-user-init"
  push parts lf

  let line implode parts
  let content concat content line

  sudo_save path content
 end

 config_install "/etc/bash.bashrc"
 config_install "/etc/profile"
 config_install "/root/.bashrc"

 let dot_bashrc os_home
 let dot_bashrc path_concat dot_bashrc ".bashrc"

 if is_file dot_bashrc
  config_install dot_bashrc
end