fn init x:etc
 let home os_home
 let mnt path_concat home "vps"
 
 mnt_clean mnt
end
