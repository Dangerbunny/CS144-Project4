ant
rm -r /var/lib/tomcat7/webapps/eBay/
cp build/eBay.war /var/lib/tomcat7/webapps/
sudo /etc/init.d/tomcat7 restart
