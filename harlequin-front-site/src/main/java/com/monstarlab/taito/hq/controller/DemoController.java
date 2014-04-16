package com.monstarlab.taito.hq.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.monstarlab.taito.hq.data.domain.Demo;
import com.monstarlab.taito.hq.service.impl.DemoServiceImpl;

@Controller
@RequestMapping(value = "demo")
public class DemoController {
	@Resource
	private DemoServiceImpl demoService;

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String demoString() {
        return "index";
    }
    
    @RequestMapping(value = "test", method = RequestMethod.GET)
    public List<Demo> name() {
    	demoService.modifyDemo();
		return demoService.queryDemo();
	}
}
