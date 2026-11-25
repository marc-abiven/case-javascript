fn init name x:etc
 //display

 fn display x:obj
  assign x.groups join x.groups " "

  if is_num x.created
   assign x.created time_hn x.created

  if is_num x.last_log
   assign x.last_log time_hn x.last_log
 end

 //main

 let list org_user_load

 if is_str name
  if not has list name
   let name to_lit name

   log "User" name "doesn't exist."

   ret
  end

  let user get list name

  display user

  let user to_tbl user
  let user tbl_render user

  log user

  ret
 end

 //list

 let list obj_vals list

 tbl_sort list "uid"
 reverse list

 for list
  display v
 end

 tbl_index list

 let list tbl_render list

 log list
end