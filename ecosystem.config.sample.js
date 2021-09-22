module.exports = {
  apps : {
    name   : "gun-server",
    script : "./examples/http.js",
    ignore_watch : ["node_modules", "public/images", "radata", "stats.radata", ".git/index.lock"],
    env : {
	    "PORT" : "16902",
	    "HTTPS_KEY" : "/home/admin/conf/web/server-excel.bimasoft.web.id/ssl/server-excel.bimasoft.web.id.key",
	    "HTTPS_CERT" : "/home/admin/conf/web/server-excel.bimasoft.web.id/ssl/server-excel.bimasoft.web.id.crt",
	    "PEERS" : "https://gun-relay.bimasoft.web.id:16902/gun",
	    "AXE" : false
    }
  }
}

