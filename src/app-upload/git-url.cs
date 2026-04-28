fn git_url x:str y:str z:str
 ret concat "https://" x "@github.com/" y "/" z ".git"
end
