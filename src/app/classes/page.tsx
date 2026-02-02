"use client";
import styles from "./classes.module.css";
import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  const handleCourseClick = useCallback(
    (courseId: number) => {
      router.push(`/course/${courseId}`);
    },
    [router]
  );

  const setCategory = useCallback((id: string) => setSelectedCategory(id), []); 

  const categories = [
    { id: "all", name: "Todas as Categorias" },
    { id: "japanese", name: "Culinária Japonesa" },
    { id: "sushi", name: "Sushi & Sashimi" },
    { id: "ramen", name: "Ramen & Noodles" },
    { id: "desserts", name: "Sobremesas" },
  ];

  const courses = [
    {
      id: 1,
      title: "Curso Completo de Receitas Japonesas",
      category: "japanese",
      image: "/culinaria.webp",
      rating: 4.6,
      views: "84.4k",
      duration: "20.6 horas",
      price: "€89",
      chef: "Hiroshi Tanaka",
      description: "Aprenda as técnicas fundamentais da culinária japonesa tradicional",
      level: "Iniciante",
      students: 1250
    },
    {
      id: 2,
      title: "Arte do Sushi: Do Básico ao Avançado",
      category: "sushi",
      image: "/sushi.jpg",
      rating: 4.8,
      views: "92.1k",
      duration: "15.3 horas",
      price: "€129",
      chef: "Yuki Nakamura",
      description: "Domine a arte milenar do sushi com técnicas profissionais",
      level: "Intermediário",
      students: 890
    },
    {
      id: 3,
      title: "Ramen Autêntico: Caldos e Noodles",
      category: "ramen",
      image: "/ramen.webp",
      rating: 4.7,
      views: "67.8k",
      duration: "12.4 horas",
      price: "€79",
      chef: "Kenji Sato",
      description: "Crie caldos ricos e noodles perfeitos para o ramen",
      level: "Iniciante",
      students: 756
    },
    {
      id: 4,
      title: "Sobremesas Japonesas Tradicionais",
      category: "desserts",
      image: "/sobremesas.webp",
      rating: 4.5,
      views: "45.2k",
      duration: "8.7 horas",
      price: "€59",
      chef: "Aiko Yamamoto",
      description: "Doces delicados e tradicionais da culinária japonesa",
      level: "Iniciante",
      students: 432
    },
    {
      id: 5,
      title: "Técnicas Avançadas de Sashimi",
      category: "sushi",
      image: "/altacozinha.webp",
      rating: 4.9,
      views: "38.9k",
      duration: "10.2 horas",
      price: "€149",
      chef: "Yuki Nakamura",
      description: "Perfeicione suas habilidades com peixe fresco e técnicas de corte",
      level: "Avançado",
      students: 234
    },
    {
      id: 6,
      title: "Wagyu e Técnicas de Grelhado",
      category: "japanese",
      image: "/wagyu.png",
      rating: 4.8,
      views: "29.7k",
      duration: "6.5 horas",
      price: "€199",
      chef: "Hiroshi Tanaka",
      description: "Trabalhe com carnes premium e técnicas de grelhado japonesas",
      level: "Avançado",
      students: 156
    }
  ];

  const popularChefs = [
    {
      name: "Hiroshi Tanaka",
      specialty: "Culinária Japonesa Tradicional",
      image: "/chef.jpg",
      rating: 4.9,
      courses: 12,
      students: 2500
    },
    {
      name: "Yuki Nakamura",
      specialty: "Técnicas de Sushi",
      image: "/chef2.jpeg",
      rating: 4.8,
      courses: 8,
      students: 1800
    },
    {
      name: "Kenji Sato",
      specialty: "Ramen e Noodles",
      image: "/chef3.jpg",
      rating: 4.7,
      courses: 6,
      students: 1200
    }
  ];

  const filteredCourses = useMemo(
    () =>
      selectedCategory === "all"
        ? courses
        : courses.filter((course) => course.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Popular Chefs Section */}
        <div className={styles.chefsSection}>
          <div className={styles.sectionHeader}>
            <h2>Nossos Chefs Populares</h2>
            <p>Conheça os especialistas que vão te ensinar</p>
          </div>
          
          <div className={styles.chefsGrid}>
            {popularChefs.map((chef, index) => (
              <div key={index} className={styles.chefCard}>
                <div className={styles.chefImageContainer}>
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    width={80}
                    height={80}
                    className={styles.chefImage}
                  />
                </div>
                
                <div className={styles.chefInfo}>
                  <h3 className={styles.chefName}>{chef.name}</h3>
                  <p className={styles.chefSpecialty}>{chef.specialty}</p>
                  
                  <div className={styles.chefRating}>
                    <div className={styles.chefRatingStars}>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <span className={styles.chefRatingNumber}>{chef.rating}</span>
                  </div>
                  
                  <div className={styles.chefStats}>
                    <div className={styles.chefStat}>
                      <span className={styles.chefStatNumber}>{chef.courses}</span>
                      <span className={styles.chefStatLabel}>Cursos</span>
                    </div>
                    <div className={styles.chefStat}>
                      <span className={styles.chefStatNumber}>{chef.students}</span>
                      <span className={styles.chefStatLabel}>Estudantes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Categories Filter */}
        <div className={styles.categoriesSection}>
          <h2>Explore por Categoria</h2>
          <div className={styles.categoriesFilter}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${
                  selectedCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className={styles.coursesSection}>
          <div className={styles.sectionHeader}>
            <h2>Cursos Disponíveis</h2>
            <p>{filteredCourses.length} cursos encontrados</p>
          </div>
          
          <div className={styles.coursesGrid}>
            {filteredCourses.map((course) => (
              <div key={course.id} className={styles.courseCard} onClick={() => handleCourseClick(course.id)}>
                <div className={styles.courseImageContainer}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    className={styles.courseImage}
                  />
                  <div className={styles.courseLevel}>
                    {course.level}
                  </div>
                </div>
                
                <div className={styles.courseContent}>
                  <div className={styles.courseHeader}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <div className={styles.coursePrice}>{course.price}</div>
                  </div>
                  
                  <p className={styles.courseDescription}>{course.description}</p>
                  
                  <div className={styles.courseInstructor}>
                    <span>Chef: {course.chef}</span>
                  </div>
                  
                  <div className={styles.courseStats}>
                    <div className={styles.rating}>
                      <span className={styles.star}>⭐</span>
                      <span className={styles.ratingNumber}>{course.rating}</span>
                    </div>
                    
                    <div className={styles.views}>
                      <span className={styles.viewCount}>{course.views} visualizações</span>
                    </div>
                    
                    <div className={styles.duration}>
                      <span className={styles.hours}>{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className={styles.courseFooter}>
                    <div className={styles.studentsCount}>
                      {course.students} estudantes
                    </div>
                    <button className={styles.enrollButton}>
                      Inscrever-se
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
