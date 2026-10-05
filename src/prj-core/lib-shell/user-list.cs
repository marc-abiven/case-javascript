fn user_list with_group
 if is_undef with_group
  ret user_list true

 check is_bool with_group

 //last log

 fn last_log user:str
  //first line

  let lines os_execute "last" "--fulltimes" "--nohostname" user
  let lines split lines
  let line front lines

  if is_empty line
   ret null

  let line txt_inline line

  //scan and take the first date

  var date null

  for scan line is_date
   if is_date v
    assign date v

    brk
   end
  end

  ret date_decode date
 end

 //find group

 var groups null

 fn find_group gid:uint
  forin groups
   if same v.gid gid
    ret v.name
  end

  stop
 end

 //find groups

 fn find_groups name:str
  let r arr

  forin groups
   if contain v.users name
    push r v.name
  end

  ret r
 end

 //main

 let r obj
 let lines file_load "/etc/passwd"
 let lines split lines

 if with_group
  assign groups group_list

 for lines
  let fields split v ":"
  let name shift fields
  let password shift fields
  let uid shift fields
  let uid to_uint uid
  let gid shift fields
  let gid to_uint gid
  let comment shift fields
  let home shift fields
  let shell shift fields
  let human match_l home "/home/"
  var created null
  let last_log last_log name

  check is_empty fields

  let o obj uid gid name comment home shell human created last_log

  if with_group
   let group find_group gid
   let groups find_groups name

   unshift groups group

   let groups dedup groups

   sort groups

   assign o.groups groups

   obj_order o "uid" "gid" "name" "groups"
  end

  put r name o
 end

 ret r
end
