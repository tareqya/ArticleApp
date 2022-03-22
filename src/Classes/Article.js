class Article {
  constructor(
    title,
    author,
    description,
    content,
    publishedDate,
    imageUrl,
    color
  ) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.content = content;
    this.publishedDate = publishedDate;
    this.imageUrl = imageUrl;
    this.color = color;
  }

  toDict = () => {
    return {
      title: this.title,
      author: this.author,
      description: this.description,
      content: this.content,
      publishedDate: this.publishedDate.toDateString(),
      imageUrl: this.imageUrl,
      color: this.color,
    };
  };
}

export default Article;
