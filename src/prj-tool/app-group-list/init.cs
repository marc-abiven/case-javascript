fn init name x:etc
 //display

 fn display x:obj
  assign x.users join x.users " "
 end

 //main

 let list group_list

 if is_str name
  if not has list name
   let name to_lit name

   log "Group" name "doesn't exist."

   ret
  end
  let group get list name

  display group

  let group to_tbl group
  let group tbl_render group

  log group

  ret
 end

 //list

 let list obj_vals list

 tbl_sort list "gid"
 reverse list

 let a list
 let list arr

 for a
  if is_empty v.users
   cont

  display v

  push list v
 end

 tbl_index list

 let list tbl_render list

 log list
end
