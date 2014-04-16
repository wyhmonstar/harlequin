package com.monstarlab.taito.hq.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * @author Administrator
 *
 */
public abstract class AbstractService {
    
    protected final Logger L = LoggerFactory.getLogger(getClass());
    
    //********DO NOT MODIFY********
    //query params name constant
    //if the query param name not exsit,append it.
    protected static final String PARAM_ID = "id";
    
}
