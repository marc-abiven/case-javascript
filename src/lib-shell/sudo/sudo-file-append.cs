fn sudo_file_append path:str data:str
 let content file_read path
 let content concat content data

 sudo_file_save path content
end
