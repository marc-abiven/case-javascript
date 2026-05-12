gn init x:etc
 //is my process

 fn is_my_process x
  if not is_obj x
   ret false

  let file path_file x.path

  if same file "node"
   ret true

  for x.args
   let file path_file v

   if match file "cmd-*"
    ret true
  end

  ret false
 end

 //main

 let t os_ps
 let t filter t is_my_process

 for t
  assign v.args join v.args " "
 end

 let t tbl_render t

 log t
end
