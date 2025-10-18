fn config_append path:str line:str
 check is_ln line

 let content sudo_file_read path
 let parts arr

 if not match_r content lf
  push parts lf

 let line pad_r line " " config_padding

 push parts line
 push parts "#"
 push parts config_tag 
 push parts lf

 let line implode parts
 let content concat content line

 sudo_file_save path content
end
