fn tbl_rename_column x:arr y:str z:str
 let t dup x

 clear x

 for t
  let row v
  let o obj

  forin row
   let v get row k

   if same k y
    put o z v
    cont
   end

   put o k v
  end

  push x o
 end
end
