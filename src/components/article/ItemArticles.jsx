import { Badge, Button, Card, Col, Container, Image } from "react-bootstrap";
import Image1 from "./../../assets/img/article/event (1).jpg";
import Image2 from "./../../assets/img/article/event (5).jpg";
import Image3 from "./../../assets/img/article/event (7).jpg";
import Image4 from "./../../assets/img/article/event (8).jpg";
import Image5 from "./../../assets/img/article/event (9).jpg";
import Image6 from "./../../assets/img/article/event (11).jpg";

const ArticleItem = ({ image, category, author, title, body, time }) => {
  return (
    <Col data-wow-delay="0.3s">
      <Card className="h-100">
        <div className="position-relative">
          <Image
            src={image}
            className="card-img-top"
            alt="image"
            style={{ objectFit: "cover", height: "10em" }}
          />
          <div className="card-img-overlay d-flex justify-content-start align-items-start">
            <Badge bg="warning" text="dark">
              {category}
            </Badge>
          </div>
        </div>
        <Card.Body>
          <h5 className="text-danger">{author}</h5>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-justify">{body}</Card.Text>
          <Button variant="primary" href="#">
            Read More
          </Button>
        </Card.Body>
        <Card.Footer bg="light">
          <small className="text-dark fw-normal">Created {time} ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

const ItemArticles = () => {
  const articleList = [
    <ArticleItem
      image={Image1}
      title={"The Future of Global Trade: Trends and Challenges"}
      author={"Ferdian Firmansyah"}
      category={"Politics"}
      body={
        "his article examines the state of global trade in 2023, including the…"
      }
      time={"1 Second"}
    />,
    <ArticleItem
      image={Image2}
      title={
        "The Rise of the Metaverse: What it Means for Business and Society"
      }
      author={"Ferdian Firmansyah"}
      category={"Business"}
      body={
        "This article discusses the concept of the metaverse and its potential applications in gaming,…"
      }
      time={"1 second"}
    />,
    <ArticleItem
      image={Image3}
      title={"Why Diversity and Inclusion are Crucial for Business Success"}
      author={"Yusuf Dian"}
      category={"Environment"}
      body={
        "This article explores the business case for diversity and inclusion, highlighting the benefits of…"
      }
      time={"3 Weeks"}
    />,
    <ArticleItem
      image={Image4}
      title={"How to Build a Successful Remote Work Culture in 2023"}
      author={"Yusuf Dian"}
      category={"Environment"}
      body={
        "This article provides tips for creating a positive remote work culture in the post-pandemic…"
      }
      time={"3 Weeks"}
    />,
    <ArticleItem
      image={Image5}
      title={"Pentingnya Menjaga Kesehatan Mental di Era Digital"}
      author={"Setya Utomo"}
      category={"Business"}
      body={
        "Artikel ini membahas tentang pentingnya menjaga kesehatan mental di era digital, di mana teknologi…"
      }
      time={"2 Months"}
    />,
    <ArticleItem
      image={Image6}
      title={"Meningkatkan Produktivitas Kerja dengan Strategi Manajemen Waktu"}
      author={"Setya Utomo"}
      category={"Politics"}
      body={
        "Artikel ini membahas strategi manajemen waktu yang efektif untuk meningkatkan produktivitas kerja. Di antaranya…"
      }
      time={"2 Months"}
    />,
  ];
  return (
    <div className="container-xxl py-5">
      <Container>
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Articles
          </p>
          <h1 className="display-5 mb-5">Latest Articles</h1>
        </div>
        <div className="wow fadeInUp" data-wow-delay="0.3s">
          <div
            className="row row-cols-3 row-cols-md-3 g-4"
            data-wow-delay="0.3s"
          >
            {articleList}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ItemArticles;
