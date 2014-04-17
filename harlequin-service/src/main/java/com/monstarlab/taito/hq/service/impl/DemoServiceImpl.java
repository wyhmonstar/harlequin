package com.monstarlab.taito.hq.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.monstarlab.taito.hq.data.domain.Demo;
import com.monstarlab.taito.hq.data.repository.DemoRepository;

@Service
public class DemoServiceImpl {
	@Autowired
	private DemoRepository demoRepository;
	
	@Transactional(propagation = Propagation.NOT_SUPPORTED, readOnly = true)
	public List<Demo> queryDemo(){
		return demoRepository.getDemos();
	} 
	
	@Transactional(rollbackFor = Throwable.class)
	public void modifyDemo() {
		Demo demo = new Demo();
		demo.setUserName("123");
		demo.setPassword("123");
		demoRepository.save(demo);
	}
}
