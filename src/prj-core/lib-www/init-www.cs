fn init_www stm:obj
 let escape chr 27
 let nbsp chr 160
 let entities dom_entities
 let mailer "mabynogy@gmail.com"
 let admin "mabynogy@freeserver.sh"
 let author "marc@abiven.eu"

 let state obj escape nbsp entities mailer admin author

 stm_state stm state
end
