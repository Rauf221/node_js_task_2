import Image from 'next/image';
import { GetServerSideProps } from 'next';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  comments: number;
  imageUrl: string;
  content: string;
}

const BlogPost = ({ title, author, date, comments, imageUrl, content }: BlogPostProps) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-500">
        <a href="/" className="hover:underline">Home</a> &gt; 
        <span className="ml-1">News</span> &gt; 
        <span className="ml-1 font-bold">{title}</span>
      </nav>
      
      {/* Title Section */}
      <article>
        <div className="text-center mb-6">
          <span className="text-sm uppercase text-gray-500">News</span>
          <h1 className="text-4xl font-bold mt-2">{title}</h1>
          <p className="text-sm text-gray-400">
            {author} - {date} - {comments} Comments
          </p>
        </div>

        {/* Image */}
        <div className="mb-8">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={1200} 
            height={800} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose mx-auto text-gray-700">
          {content}
        </div>
      </article>
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/blogs');
  const data = await res.json();

  return {
    props: {
      title: data.title,
      author: data.author,
      date: data.date,
      comments: data.comments,
      imageUrl: data.imageUrl,
      content: data.content,
    },
  };
};

export default BlogPost;
