function init(...x)
{
 const parameters=dup(x)

 let direction="salt"
 
 if(extract(parameters,"--salt"))
  direction="salt"
  
 if(extract(parameters,"--unsalt"))
  direction="unsalt"
  
 let message=shift(parameters)

 if(is_full(parameters))
 {
  log(parameters)
  log("unsupported",to_lit("parameters"))
  
  return
 }

 if(same(direction,"salt"))
 { 
  message=salt(message)
  message=base36_encode(message)
 
  log(message)
 }
 else if(same(direction,"unsalt"))
 {
  message=base36_decode(message)
  message=salt(message)
 
  log(message)
 }
 else
  stop()
}
