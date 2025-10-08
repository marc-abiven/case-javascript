fn csv_load x:obj
 check is_obj x

 let r arr
 let paths arr

 for dir_read x.tmp
  let base path_base v

  if match base "data-*.csv"
   push paths v
 end

 if is_empty paths
  ret r

 pop paths

 if is_empty paths
  ret r

 for paths
  let content file_load v

  fs_remove v

  let content trim content
  let lines split content

  shift lines

  for lines
   let fields split v ","

   shift fields

   let row arr

   for fields
    let n to_num v
    let n div n 1000

    push row n
   end

   check same row.length dimension

   push r row
  end
 end

 ret r
end
