fn report_mail report
 check is_obj report

 let html report_html report 73

 mail author report.title html
end