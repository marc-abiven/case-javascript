fn group_list
 //find user

 let users user_list false

 fn find_users gid:uint
  let r arr

  forin users
   let v get users k

   if same v.gid gid
    push r v.name
  end

  ret r
 end

 //main

 let r obj
 let lines file_load "/etc/group"
 let lines split lines

 for lines
  let fields split v ":"
  let name shift fields
  let password shift fields
  let gid shift fields
  let gid to_uint gid
  let users shift fields
  let users split users ","

  check is_empty fields

  let a find_users gid

  append users a

  let users dedup users

  sort users

  let o obj gid name users

  put r name o
 end

 ret r
end