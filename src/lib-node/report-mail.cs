fn report_mail report:obj
 let html report_html report 65 false

 mail author report.title html
end
