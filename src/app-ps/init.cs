gn init x:etc
 fn is_my_process x
  if not is_obj x
   ret false

  let file path_file x.path

  if same file "node"
   ret true

  forof x.args
   let file path_file v

   if match file "cmd-*"
    ret true
  end

  ret false
 end

 let t os_ps
 let t filter t is_my_process

 for t
 //~ forin t
  //~ let i to_i k
  //~ let v at t i

  assign v.args join v.args " "
 end

 let t tbl_render t

 log t
end
