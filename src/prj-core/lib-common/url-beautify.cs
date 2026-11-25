fn url_beautify x:str
 let r strip_l x "http://"
 let r strip_l r "https://"
 let r path_unfix r

 ret r
end
