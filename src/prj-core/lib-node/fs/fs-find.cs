//locate a path containing wildcards inside a directory

fn fs_find dir:str pattern:str
 for dir_load dir true
  if match v pattern
   ret v
 end

 stop
end