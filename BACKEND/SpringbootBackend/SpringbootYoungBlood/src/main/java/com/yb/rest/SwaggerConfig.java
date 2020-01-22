package com.yb.rest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket postsApi() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("public-api")
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.ant("/api/**")) //api에 rest로 시작하는 모든것을 문서화 //정규표현식을 활용해 경로 지정 
				.build();
	}
	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("YoungBlood API").description("YoungBlood API Reference for Developers")
				.termsOfServiceUrl("https://edu.ssafy.com").contact("sj05publu@naver.com").license("YoungBloodTeam License")
				.licenseUrl("sj05publu@naver.com").version("1.0").build();
	}
}
//스웨거 세팅