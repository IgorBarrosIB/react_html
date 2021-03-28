import './styles.css';

function EvaluationCard(){
  return(
    <article itemprop="review" itemscope itemtype="https://schema.org/Review">
      <header>
        <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
            Web</span></h3>
        <p>10/01/2018</p>
        <img src="_img/star.png" alt="Review do Curso HTML5 e CSS3 Essentials"
          title="Review do Curso HTML5 e CSS3 Essentials"/>
        <img src="_img/star.png" alt="Review do Curso HTML5 e CSS3 Essentials"
          title="Review do Curso HTML5 e CSS3 Essentials"/>
        <img src="_img/star.png" alt="Review do Curso HTML5 e CSS3 Essentials"
          title="Review do Curso HTML5 e CSS3 Essentials"/>
        <img src="_img/star.png" alt="Review do Curso HTML5 e CSS3 Essentials"
          title="Review do Curso HTML5 e CSS3 Essentials"/>
        <img src="_img/star.png" alt="Review do Curso HTML5 e CSS3 Essentials"
          title="Review do Curso HTML5 e CSS3 Essentials"/>
      </header>

      <p itemprop="description">O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
        desenvolvendo minhas páginas em HTML5 sem problemas</p>
    </article>
  )
}

export default EvaluationCard;