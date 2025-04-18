function app_home(x)
{
 check(is_str,x)
 
 const lines=arr()
 const js=app_make(x)
 
 push(lines,"<!doctype html>")
 push(lines,"<script>")
 push(lines,js)
 push(lines,"</script>")
 
 return join(lines)
}
