fn config_clean path:str
 let inputs sudo_file_read path
 let inputs split inputs
 let outputs arr

 for inputs
  let parts split v "#"

  if is_empty parts
   push outputs v

   cont
  end

  let tag back parts

  if different tag config_tag
   push outputs v

   cont
  end

  trace "config>" v
 end

 let content join outputs

 sudo_file_save path content
end
