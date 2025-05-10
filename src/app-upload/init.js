function init(...x)
{
 const parameters=dup(x)
 
 let upload_marc_abiven=true
 let upload_transhumanistes=true
 let upload_kimsufi=true
 let upload_abripourtous=true
 
 if(extract(parameters,"--marc-abiven"))
 {
  upload_transhumanistes=false
  upload_kimsufi=false
  upload_abripourtous=false
 }

 if(extract(parameters,"--transhumanistes"))
 {
  upload_marc_abiven=false
  upload_kimsufi=false
  upload_abripourtous=false
 }

 if(extract(parameters,"--kimsufi"))
 {
  upload_marc_abiven=false
  upload_transhumanistes=false
  upload_abripourtous=false
 }

 if(extract(parameters,"--abripourtous"))
 {
  upload_marc_abiven=false
  upload_transhumanistes=false
  upload_kimsufi=false
 }
  
 if(is_full(parameters))
 {
  log(parameters)
  log("unsupported",to_lit("parameters"))
  
  return
 }
 
 fs_remove("tmp")
 
 if(upload_marc_abiven)
 {
  marc_abiven()
  log()
 }
 
 if(upload_transhumanistes)
 {
  transhumanistes()
  log()
 }
 
 if(upload_kimsufi)
 {
  kimsufi()
  log
 }
 
 if(upload_abripourtous)
 {
  abripourtous()
  log()
 }
}
