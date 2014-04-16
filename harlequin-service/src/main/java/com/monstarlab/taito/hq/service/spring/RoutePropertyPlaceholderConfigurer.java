package com.monstarlab.taito.hq.service.spring;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;

public class RoutePropertyPlaceholderConfigurer extends PropertyPlaceholderConfigurer {
	
	private final static Logger LOG = LogManager.getLogger(RoutePropertyPlaceholderConfigurer.class);

	private final static String ENV_CONTROL_PROPERTY_KEY = "env";
	
	private final static String ENV_CONTROL_PROPERTY_DEFAULT_VALUE= "DEVL";
	
	private final static String ENV_NAME_PLACEHOLDER= "[env]";
	
	private final static String ENV_ACTUAL_PROPERTY_TPL_NAME = "system_[env].properties";
	
	private static ClassLoader classLoader;

	private Properties actualEnv = new Properties();
	
	private Properties controlEnv = new Properties();

	static {
		if (classLoader == null)  {
			classLoader = RoutePropertyPlaceholderConfigurer.class.getClassLoader();
		}
	}

	public void setEnvironment(String envPropertyName) {
		
		if (StringUtils.isNotBlank(envPropertyName)) {
			
			try  (InputStream in = classLoader.getResourceAsStream("/" + envPropertyName)) {
				controlEnv.load(in);
				String envValue = controlEnv.getProperty(ENV_CONTROL_PROPERTY_KEY, ENV_CONTROL_PROPERTY_DEFAULT_VALUE);
				loadActualPropery( ENV_ACTUAL_PROPERTY_TPL_NAME.replace(ENV_NAME_PLACEHOLDER,  envValue.toUpperCase()));
			} catch (IOException e) {
				LOG.error(e.getMessage(), e);
				throw new RuntimeException("failed to load the enironment property.", e);
			}
		} else {
			throw new RuntimeException("the [environment] can not be empty in profile.");
		}
	}
	
	private void loadActualPropery(String actualPropertyName) {
		
		try (InputStream in = classLoader.getResourceAsStream("/" + actualPropertyName)) {
			actualEnv.load(in);
			super.setProperties(actualEnv);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			throw new RuntimeException("failed to load the enironment property.", e);
		}
	}
}
