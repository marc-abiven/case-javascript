fn sudo_fs_rename source:str target:str
 sudo "mv" "--force" source target //atomic
end
