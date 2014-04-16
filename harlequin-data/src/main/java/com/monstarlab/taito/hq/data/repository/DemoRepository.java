package com.monstarlab.taito.hq.data.repository;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.monstarlab.taito.hq.data.domain.Demo;

public interface DemoRepository extends JpaRepository<Demo, Long>, DemoRepositoryCustom {

	@Query(value = "select count(1) from demo", nativeQuery = true)
	BigInteger findDemoCount();

	@Modifying
	@Query(value = "DELETE from demo WHERE id=:id", nativeQuery = true)
	void cancelFollowUser(@Param("id") Long id);

}
