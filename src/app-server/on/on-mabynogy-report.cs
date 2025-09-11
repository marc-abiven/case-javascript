gn on_mabynogy_report server:obj host:str url:obj method:str remote:str request:obj response:obj
 //~ check is_obj server
 //~ check is_str host
 //~ check is_obj url
 //~ check is_str method
 //~ check is_str remote
 //~ check is_obj request
 //~ check is_obj response

 check same method "post"

 let report run server_load server request

 report_log report
 report_mail report

 ret "ok"
end
