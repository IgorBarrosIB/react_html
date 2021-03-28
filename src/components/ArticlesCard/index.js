import './styles.css';
import img from '../../assets/_img/post.jpg';

function ArticlesCard() {
  return (
    <>
    <article itemscope itemtype="https://schema.org/Article">
      <a href="#" itemprop="mainEntityOfPage">
        <img itemprop="image" src={img} alt="Lorem Ipsum is simply" title="Lorem Ipsum is simply" />
      </a>
      <p><a href="#" className="category">categoria</a></p>
      <h2>
        <a href="#" className="title">
          <span itemprop="headline"> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</span>
        </a>
      </h2>
          <div className="main_blog_meta">
            <p>
              <span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Por: Gustavo
              Web</span></span>
              <span itemprop="publisher" itemscope itemtype="https://schema.org/Organization"><span itemprop="name">via:
              Upinside<span itemprop="logo" itemscope itemtype="https://schema.org/ImageObject"> <img
                  src="_img/upinside.jpg" itemprop="url" alt="" /></span></span></span>
              <span itemprop="" className="ds_none"></span>
            </p>
            <time datetime="2021-03-08" itemprop="datePublished">08/03/2021</time>
            <time className="ds_none" datetime="2021-03-08" itemprop="dateModified">08/03/2021</time>
          </div>
    </article>
    </>
  )
}

export default ArticlesCard;

