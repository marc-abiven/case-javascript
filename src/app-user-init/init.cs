fn init x:etc
 fn get_prompt
  let red rgb_init 5 0 0
  let yellow rgb_init 5 5 0

  let time ps1_encode "\\t" yellow "black"
  var user null

  if is_root
   assign user ps1_encode "\\u" red "white" "bold"
  else
   assign user ps1_encode "\\u" "green" "white" "bold"

  let host ps1_encode "\\h" "blue" "white" "bold"
  let login concat user "@" host
  let path ps1_encode "\\w" "cyan" "white" "bold"
  let path concat path " $ "

  ret space time login path
 end

 var prompt get_prompt
 let prompt squote prompt
 let prompt concat "PS1=" prompt

 log prompt
 log "export PS1"
end