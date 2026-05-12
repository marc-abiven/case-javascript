fn init x:etc
 let home os_home
 let mnt path_concat home "merlin"

 mnt_clean mnt
 os_system "pkill" "sshfs"
end
