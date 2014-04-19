package com.monstarlab.taito.hq.data.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.LongType;
import org.hibernate.type.StringType;

import com.monstarlab.taito.hq.data.domain.Demo;

public class DemoRepositoryImpl implements DemoRepositoryCustom {
	
	@PersistenceContext
	private EntityManager em;
    
	@SuppressWarnings("unchecked")
	@Override
	public List<Demo> getDemos() {
		String sql = "select id,user_name as userName,password from demo";
		SQLQuery query = em.createNativeQuery(sql).unwrap(SQLQuery.class);
		query.addScalar("id", LongType.INSTANCE).addScalar("userName",StringType.INSTANCE).addScalar("password",StringType.INSTANCE).setResultTransformer(
				Transformers.aliasToBean(Demo.class));
		return (List<Demo>)query.list();
	}
	
}
