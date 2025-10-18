fn os_shell x:etc
 let maxBuffer mul 1 1024 1024 1024
 let encoding "utf8"
 let option obj maxBuffer encoding
 let command join x " "

 ret cp.execSync command option
end