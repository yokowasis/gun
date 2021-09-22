module.exports = {
  apps : {
    name   : "gun-server",
    script : "npm start",
    watch : true,
    ignore_watch : ["node_modules", "public/images", "radata", "stats.radata", ".git/index.lock", "*.log"],
    env : {
	    "PORT" : "16902",
	    "HTTPS_KEY" : "/home/admin/conf/web/server-excel.bimasoft.web.id/ssl/server-excel.bimasoft.web.id.key",
	    "HTTPS_CERT" : "/home/admin/conf/web/server-excel.bimasoft.web.id/ssl/combined-pem-crt.pem",
	    "PEERS" : "https://gun-relay.bimasoft.web.id:16902/gun",
	    "AXE" : false
    }
  }
}

