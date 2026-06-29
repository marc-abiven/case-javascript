fn stm_on_any_node_warning stm:obj event:str error:obj args:etc
 //a warning inherits Error
 
 ret stm_on_any_error stm event error args:etc
end
