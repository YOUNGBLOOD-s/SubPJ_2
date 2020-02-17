package com.yb.rest;

import javax.sql.DataSource;

import org.apache.catalina.Context;
import org.apache.catalina.connector.Connector;
import org.apache.tomcat.util.descriptor.web.SecurityCollection;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class AppConfig {

	@Bean
	public PlatformTransactionManager getPlatformTransactionManager(DataSource ds) {
		return new DataSourceTransactionManager(ds);
		// 이놈이 데이터소스랑 디비 정보 가지고있는거 연결해주는거
	}
	
	/*
	 * @Bean public ServletWebServerFactory servletContainer() {
	 * 
	 * TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory(){
	 * 
	 * @Override protected void postProcessContext(Context context) {
	 * SecurityConstraint securityConstraint = new SecurityConstraint();
	 * securityConstraint.setUserConstraint("CONFIDENTIAL"); SecurityCollection
	 * collection = new SecurityCollection(); collection.addPattern("/*");
	 * securityConstraint.addCollection(collection);
	 * context.addConstraint(securityConstraint); } };
	 * tomcat.addAdditionalTomcatConnectors(createSslConnector()); return tomcat; }
	 * 
	 * private Connector createSslConnector() { Connector connector = new
	 * Connector("org.apache.coyote.http11.Http11NioProtocol");
	 * connector.setScheme("http"); connector.setSecure(false);
	 * connector.setPort(8283); connector.setRedirectPort(8887); return connector; }
	 */
}