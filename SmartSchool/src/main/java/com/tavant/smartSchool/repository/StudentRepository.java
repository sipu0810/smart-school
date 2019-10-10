package com.tavant.smartSchool.repository;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.tavant.smartSchool.model.Student;

public interface StudentRepository extends JpaRepository<Student , Integer>{
	
	@Query(value ="select * from Student s where s.student_Id=:id",nativeQuery=true)
	@Transactional
	Student login(@Param("id") int id);

	//List<Student> findByName(String studentName);
	
	
	@Query(value="select *from Student st where st.student_name=:studentName", nativeQuery=true)
	@Transactional
	Student findByName(@Param("studentName") String studentName);
	



}
