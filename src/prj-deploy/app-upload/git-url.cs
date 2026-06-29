fn git_url token:str user:str repo:str
 ret concat "https://" token "@github.com/" user "/" repo ".git"
end
