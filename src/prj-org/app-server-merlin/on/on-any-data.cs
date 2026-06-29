fn on_any_data context:obj
 context.response.setHeader "content-type" "application/json"

 ret "json"
end
