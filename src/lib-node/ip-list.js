function ip_list()
{
 const s=os_execute("hostname","--all-ip-addresses")
 
 return split(s," ")
}
