package ch08;

import javax.servlet.Filter;

import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

// Web.xml 설정
public class Ch08WebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

	@Override
	protected Class<?>[] getRootConfigClasses() {
		// Root Application Context's Configuration Class
		return new Class<?>[] {};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		// Dispatcher Servlet
		return new Class<?>[] {WebConfig.class};
	}

	@Override
	protected String[] getServletMappings() {
		// Dispatcher Servlet Mapping
		return new String[] {"/"};
	}

	@Override
	protected Filter[] getServletFilters() {
		// Encoding Filter
		return new Filter[] {new CharacterEncodingFilter("utf-8", false)};
	}
}
