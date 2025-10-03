fn init name:str rest:etc
 let args dup rest
 let uninstall extract args "--uninstall"

 if uninstall
  org_user_uninstall name
 else
  org_user_install name
end
