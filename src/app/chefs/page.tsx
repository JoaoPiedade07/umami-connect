"use client";
import styles from "./chefs.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ChefsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialties = [
    { id: "all", name: "Todas as Especialidades" },
    { id: "japanese", name: "Culinária Japonesa" },
    { id: "sushi", name: "Sushi & Sashimi" },
    { id: "ramen", name: "Ramen & Noodles" },
    { id: "desserts", name: "Sobremesas" },
    { id: "grilling", name: "Grelhados" },
  ];

  const chefs = [
    {
      id: 1,
      name: "Hiroshi Tanaka",
      specialty: "japanese",
      specialtyName: "Culinária Japonesa Tradicional",
      image: "/Base.jpg",
      rating: 4.9,
      experience: "25 anos",
      courses: 12,
      students: 2500,
      location: "Tóquio, Japão",
      description: "Mestre em culinária japonesa tradicional com mais de 25 anos de experiência. Especialista em técnicas autênticas e ingredientes tradicionais.",
      achievements: ["Chef Executivo do Restaurante Michelin", "Autor de 3 livros de culinária", "Professor na Universidade Culinária de Tóquio"],
      languages: ["Japonês", "Inglês", "Português"]
    },
    {
      id: 2,
      name: "Yuki Nakamura",
      specialty: "sushi",
      specialtyName: "Técnicas de Sushi",
      image: "/sushi.jpg",
      rating: 4.8,
      experience: "18 anos",
      courses: 8,
      students: 1800,
      location: "Osaka, Japão",
      description: "Especialista em sushi e sashimi com técnicas milenares. Conhecido por sua precisão e arte na preparação de peixes frescos.",
      achievements: ["Mestre Sushi Chef certificado", "Vencedor do Concurso Nacional de Sushi", "Consultor de restaurantes 5 estrelas"],
      languages: ["Japonês", "Inglês"]
    },
    {
      id: 3,
      name: "Kenji Sato",
      specialty: "ramen",
      specialtyName: "Ramen & Noodles",
      image: "/Base.jpg",
      rating: 4.7,
      experience: "15 anos",
      courses: 6,
      students: 1200,
      location: "Fukuoka, Japão",
      description: "Especialista em ramen e noodles artesanais. Domina a arte de criar caldos ricos e noodles perfeitos.",
      achievements: ["Proprietário da famosa Ramen-ya Sato", "Criador de 5 receitas premiadas", "Mentor de chefs em ascensão"],
      languages: ["Japonês", "Inglês", "Coreano"]
    },
    {
      id: 4,
      name: "Aiko Yamamoto",
      specialty: "desserts",
      specialtyName: "Sobremesas Japonesas",
      image: "/Base.jpg",
      rating: 4.6,
      experience: "12 anos",
      courses: 5,
      students: 800,
      location: "Kyoto, Japão",
      description: "Especialista em sobremesas japonesas tradicionais e modernas. Conhecida por sua criatividade e técnicas refinadas.",
      achievements: ["Pastry Chef do Hotel Imperial", "Vencedora do Concurso de Doces Tradicionais", "Autora de receitas exclusivas"],
      languages: ["Japonês", "Inglês", "Francês"]
    },
    {
      id: 5,
      name: "Takeshi Matsumoto",
      specialty: "grilling",
      specialtyName: "Técnicas de Grelhado",
      image: "/Base.jpg",
      rating: 4.8,
      experience: "20 anos",
      courses: 7,
      students: 950,
      location: "Hokkaido, Japão",
      description: "Mestre em técnicas de grelhado japonês, especialista em carnes premium e métodos tradicionais de cocção.",
      achievements: ["Especialista em Wagyu certificado", "Chef do Restaurante Teppanyaki Matsumoto", "Consultor internacional"],
      languages: ["Japonês", "Inglês", "Mandarim"]
    },
    {
      id: 6,
      name: "Sakura Ito",
      specialty: "japanese",
      specialtyName: "Culinária Vegetariana Japonesa",
      image: "/Base.jpg",
      rating: 4.5,
      experience: "10 anos",
      courses: 4,
      students: 600,
      location: "Nara, Japão",
      description: "Especialista em culinária vegetariana japonesa e técnicas de fermentação. Pioneira em pratos saudáveis e sustentáveis.",
      achievements: ["Especialista em Shojin Ryori", "Autora de livro sobre culinária vegetariana", "Consultora de sustentabilidade"],
      languages: ["Japonês", "Inglês"]
    }
  ];

  const filteredChefs = selectedSpecialty === "all" 
    ? chefs 
    : chefs.filter(chef => chef.specialty === selectedSpecialty);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Conheça Nossos Chefs Especialistas</h1>
            <p>Aprenda com os melhores mestres da culinária japonesa, cada um com sua especialidade única e anos de experiência</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Chefs</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Cursos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4.8</span>
                <span className={styles.statLabel}>Avaliação</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Filter */}
        <div className={styles.specialtiesSection}>
          <h2>Filtrar por Especialidade</h2>
          <div className={styles.specialtiesFilter}>
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                className={`${styles.specialtyButton} ${
                  selectedSpecialty === specialty.id ? styles.active : ""
                }`}
                onClick={() => setSelectedSpecialty(specialty.id)}
              >
                {specialty.name}
              </button>
            ))}
          </div>
        </div>

        {/* Chefs Grid */}
        <div className={styles.chefsSection}>
          <div className={styles.sectionHeader}>
            <h2>Nossos Chefs</h2>
            <p>{filteredChefs.length} chefs encontrados</p>
          </div>
          
          <div className={styles.chefsGrid}>
            {filteredChefs.map((chef) => (
              <div key={chef.id} className={styles.chefCard}>
                <div className={styles.chefImageContainer}>
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    width={120}
                    height={120}
                    className={styles.chefImage}
                  />
                  <div className={styles.chefExperience}>
                    {chef.experience}
                  </div>
                </div>
                
                <div className={styles.chefContent}>
                  <div className={styles.chefHeader}>
                    <h3 className={styles.chefName}>{chef.name}</h3>
                    <div className={styles.chefLocation}>
                      📍 {chef.location}
                    </div>
                  </div>
                  
                  <div className={styles.chefSpecialty}>
                    {chef.specialtyName}
                  </div>
                  
                  <p className={styles.chefDescription}>{chef.description}</p>
                  
                  <div className={styles.chefRating}>
                    <div className={styles.ratingStars}>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <span className={styles.ratingNumber}>{chef.rating}</span>
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
                  
                  <div className={styles.chefAchievements}>
                    <h4>Principais Conquistas:</h4>
                    <ul>
                      {chef.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.chefLanguages}>
                    <h4>Idiomas:</h4>
                    <div className={styles.languageTags}>
                      {chef.languages.map((language, index) => (
                        <span key={index} className={styles.languageTag}>
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.chefActions}>
                    <button className={styles.viewProfileButton}>
                      Ver Perfil
                    </button>
                    <button className={styles.viewCoursesButton}>
                      Ver Cursos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <div className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>Chefs em Destaque</h2>
            <p>Conheça alguns dos nossos chefs mais populares</p>
          </div>
          
          <div className={styles.featuredChefs}>
            {chefs.slice(0, 3).map((chef, index) => (
              <div key={index} className={styles.featuredChefCard}>
                <div className={styles.featuredChefImage}>
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    width={80}
                    height={80}
                    className={styles.featuredChefImage}
                  />
                </div>
                
                <div className={styles.featuredChefInfo}>
                  <h3 className={styles.featuredChefName}>{chef.name}</h3>
                  <p className={styles.featuredChefSpecialty}>{chef.specialtyName}</p>
                  
                  <div className={styles.featuredChefRating}>
                    <div className={styles.featuredRatingStars}>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <span className={styles.featuredRatingNumber}>{chef.rating}</span>
                  </div>
                  
                  <div className={styles.featuredChefStats}>
                    <span>{chef.courses} cursos</span>
                    <span>•</span>
                    <span>{chef.students} estudantes</span>
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
