fn tbl_rename_column tbl:arr column:str replace:str
 let t dup tbl

 clear tbl

 for t
  let row v
  let o obj

  forin row
   if same k column
    put o replace v

    cont
   end

   put o k v
  end

  push tbl o
 end
end
