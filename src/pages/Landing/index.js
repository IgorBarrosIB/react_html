import './styles.css';

import ArticlesCard from '../../components/ArticlesCard'

function Landing(){
  return(
    <body>
      <main>
        <div class="main_cta">
          <article class="main_cta_content">
            <div class="main_cta_content-spcaer">
              <header>
                <h1>Aqui você aprende tudo o que é necessário para trabalhar como um webmaster fullstack</h1>
              </header>

              <p>Domine o HTML5 e o CSS3 de uma vez por todas</p>
              <p><a href="#" class="btn">Saiba Mais</a></p>
            </div>
          </article>
        </div>

        <section class="main_blog">
          <header class="main_blog_header">
            <h1 class="icon-blog">Nossos últimos artigos</h1>
            <p>Aqui você encontra os artigos necessários para auxiliar na sua caminhada web</p>
          </header>
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </section>


      </main>
    </body>
  )
}

export default Landing;