import React, { useState } from "react";
import "../styles/AskQuestion.css";
 // <-- move all <style> content here

interface Post {
  id: number;
  title: string;
  body: string;
  votes: number;
  user: string;
  community: string;
  time: string;
  comments: number;
}

const AskQuestion: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "What is the best way to manage state in a large React application?",
      body: "I'm working on a large-scale project and finding that `useState` and `useContext` are becoming hard to manage. I've heard of Redux, Zustand, and Recoil. What are the pros and cons of each?",
      votes: 1200,
      user: "coder123",
      community: "AskFrontend",
      time: "4 hours ago",
      comments: 128,
    },
    {
      id: 2,
      title: "Showcase: I made a pure CSS animated portfolio.",
      body: "[Link to portfolio] - I wanted to challenge myself to not use any JavaScript for the animations. Let me know what you think!",
      votes: 47,
      user: "design_guru",
      community: "WebDev",
      time: "2 days ago",
      comments: 15,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // --- Voting functionality ---
  const handleVote = (id: number, type: "up" | "down") => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== id) return post;
        const updatedVotes =
          type === "up" ? post.votes + 1 : post.votes - 1;
        return { ...post, votes: updatedVotes };
      })
    );
  };

  // --- Add new post functionality ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title for your post.");
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      title,
      body,
      votes: 0,
      user: "CurrentUser",
      community: "NewPosts",
      time: "just now",
      comments: 0,
    };

    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      {/* Navbar */}
      <nav id="navbar">
        {/* Add your navbar content here */}
      </nav>

      {/* Main content container */}
      <div className="container">
        {/* Main feed */}
        <main className="main-content">
          {/* Create Post Form */}
          <form className="create-post-form" id="create-post-form" onSubmit={handleSubmit}>
            <div className="form-content">
              <input
                type="text"
                id="post-title"
                placeholder="Your Question Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                id="post-body"
                placeholder="Ask your question details here..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </div>
          </form>

          {/* Post List */}
          <div className="post-list" id="post-list">
            {posts.map((post) => (
              <article className="post" key={post.id}>
                {/* Voting section */}
                <div className="post-voting">
                  <button
                    className="vote-btn upvote"
                    aria-label="Upvote"
                    onClick={() => handleVote(post.id, "up")}
                  >
                    <i className="fas fa-arrow-up"></i>
                  </button>
                  <span className="vote-count">
                    {post.votes >= 1000 ? (post.votes / 1000).toFixed(1) + "k" : post.votes}
                  </span>
                  <button
                    className="vote-btn downvote"
                    aria-label="Downvote"
                    onClick={() => handleVote(post.id, "down")}
                  >
                    <i className="fas fa-arrow-down"></i>
                  </button>
                </div>

                {/* Post content */}
                <div className="post-content">
                  <div className="post-meta">
                    <a href="#" className="post-community">
                      {post.community}
                    </a>
                    <span>
                      • Posted by{" "}
                      <a href="#" className="post-user">
                        {post.user}
                      </a>{" "}
                      {post.time}
                    </span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-body">{post.body}</p>
                  <div className="post-actions">
                    <button>
                      <i className="fas fa-comment-alt"></i>
                      <span>{post.comments} Comments</span>
                    </button>
                    <button>
                      <i className="fas fa-share"></i>
                      <span>Share</span>
                    </button>
                    <button>
                      <i className="fas fa-save"></i>
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="widget about-widget">
            <h3 className="widget-title">About QAFORUM</h3>
            <p>
              This is a community for asking questions and sharing knowledge
              about web development, design, and more.
            </p>
            <div className = "btn-container">
            <button className="btn btn-primary">Create Post</button>
            <button className="btn btn-secondary">Join</button>
            </div>
          </div>

          <div className="widget rules-widget">
            <h3 className="widget-title">Forum Rules</h3>
            <ol>
              <li>Be respectful.</li>
              <li>No spam or self-promotion.</li>
              <li>Tag your posts appropriately.</li>
              <li>Search before asking.</li>
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
};

export default AskQuestion;
