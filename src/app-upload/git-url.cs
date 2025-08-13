fn git_url x y z
 check is_str x
 check is_str y
 check is_str z
 
 ret concat "https://" x "@github.com/" y "/" z ".git"
end
