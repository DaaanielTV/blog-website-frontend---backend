// Sample blog data (in a real application, this would come from an API)
const articles = [
    {
      id: 1,
      title: "The Future of Web Development in 2023",
      excerpt: "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks that are changing how we build websites.",
      content: `
        <p>Web development is constantly evolving, and 2023 is no exception. This year, we're seeing a significant shift in how websites and web applications are built, with new technologies and methodologies taking center stage.</p>
        
        <h2>AI-Powered Development Tools</h2>
        
        <p>Artificial Intelligence is revolutionizing how developers work. AI-powered code completion tools like GitHub Copilot and TabNine are helping developers write code faster and with fewer errors. These tools can suggest entire functions and blocks of code based on comments or the context of what you're building.</p>
        
        <p>Beyond just code completion, AI is also being used for:</p>
        
        <ul>
          <li>Automated testing and bug detection</li>
          <li>UI/UX recommendations based on user behavior</li>
          <li>Performance optimization</li>
          <li>Accessibility improvements</li>
        </ul>
        
        <h2>The Rise of Web Components</h2>
        
        <p>Web Components are becoming increasingly popular as developers seek more modular and reusable code. This set of standards allows for the creation of custom, reusable HTML elements that are isolated from the rest of your code.</p>
        
        <p>The major benefits include:</p>
        
        <ul>
          <li>Better code organization and reusability</li>
          <li>Encapsulated styling that won't affect the rest of your application</li>
          <li>Framework-agnostic components that work across different libraries</li>
        </ul>
        
        <h2>Server Components and Islands Architecture</h2>
        
        <p>The line between client and server rendering continues to blur with innovations like React Server Components and the Islands Architecture. These approaches aim to combine the best of both worlds: the interactivity of client-side rendering with the performance benefits of server rendering.</p>
        
        <p>This hybrid approach allows developers to build applications that load quickly and become interactive sooner, providing a better user experience.</p>
        
        <h2>WebAssembly Going Mainstream</h2>
        
        <p>WebAssembly (Wasm) is gaining traction as a way to run high-performance code in the browser. Originally designed to enable C/C++ code to run on the web, it's now being used with many languages including Rust, Go, and even Python.</p>
        
        <p>This technology is enabling more complex applications to run in the browser, from video editors to 3D games and scientific simulations.</p>
        
        <h2>Conclusion</h2>
        
        <p>The web development landscape in 2023 is exciting and full of innovation. By embracing these new technologies and methodologies, developers can build faster, more reliable, and more engaging web experiences. Whether you're a seasoned developer or just starting out, keeping up with these trends will help you stay ahead in this rapidly evolving field.</p>
      `,
      image: "/placeholder.svg?height=400&width=600",
      category: "technology",
      author: "John Doe",
      date: "June 15, 2023",
      tags: ["Web Development", "AI", "JavaScript", "WebAssembly"]
    },
    {
      id: 2,
      title: "Designing for Accessibility: A Comprehensive Guide",
      excerpt: "Learn how to make your websites accessible to everyone, including people with disabilities. This guide covers WCAG guidelines, keyboard navigation, screen readers, and more.",
      content: `<p>Accessibility in web design is not just a nice-to-have feature—it's a necessity. By designing with accessibility in mind, you ensure that your website can be used by everyone, including people with disabilities.</p>`,
      image: "/placeholder.svg?height=400&width=600",
      category: "design",
      author: "Jane Smith",
      date: "June 10, 2023",
      tags: ["Accessibility", "Design", "WCAG", "UX"]
    },
    {
      id: 3,
      title: "Building a Scalable E-commerce Platform",
      excerpt: "Discover the architecture and technologies behind building a scalable e-commerce platform that can handle millions of users and transactions.",
      content: `<p>Building a scalable e-commerce platform requires careful planning and the right technology choices. In this article, we'll explore the key components and best practices.</p>`,
      image: "/placeholder.svg?height=400&width=600",
      category: "business",
      author: "Mike Johnson",
      date: "June 5, 2023",
      tags: ["E-commerce", "Scalability", "Architecture", "Performance"]
    },
    {
      id: 4,
      title: "Introduction to CSS Grid Layout",
      excerpt: "Master the CSS Grid Layout system and learn how to create complex, responsive layouts with ease. This guide includes practical examples and best practices.",
      content: `<p>CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. In this tutorial, we'll cover everything you need to know to get started.</p>`,
      image: "/placeholder.svg?height=400&width=600",
      category: "design",
      author: "Sarah Williams",
      date: "May 28, 2023",
      tags: ["CSS", "Grid Layout", "Responsive Design", "Web Design"]
    },
    {
      id: 5,
      title: "The Impact of AI on Digital Marketing",
      excerpt: "Explore how artificial intelligence is transforming digital marketing strategies and what businesses need to know to stay competitive in this new landscape.",
      content: `<p>Artificial Intelligence is revolutionizing digital marketing in numerous ways. From personalized recommendations to automated ad targeting, AI is changing how businesses connect with customers.</p>`,
      image: "/placeholder.svg?height=400&width=600",
      category: "business",
      author: "Alex Chen",
      date: "May 20, 2023",
      tags: ["AI", "Digital Marketing", "Business Strategy", "Automation"]
    },
    {
      id: 6,
      title: "Getting Started with TypeScript",
      excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development experience with static typing and advanced features.",
      content: `<p>TypeScript adds static typing to JavaScript, making it easier to catch errors early and build more robust applications. This tutorial will help you get started with TypeScript.</p>`,
      image: "/placeholder.svg?height=400&width=600",
      category: "technology",
      author: "David Kim",
      date: "May 15, 2023",
      tags: ["TypeScript", "JavaScript", "Programming", "Web Development"]
    }
  ];
  
  // DOM Elements
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        document.querySelectorAll('.mobile-menu-btn span').forEach(span => {
          span.classList.toggle('active');
        });
      });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const subscriptionMessage = document.getElementById('subscription-message');
        
        // Simulate form submission
        setTimeout(() => {
          subscriptionMessage.innerHTML = `<p class="success-message">Thank you for subscribing! We've sent a confirmation email to ${email}.</p>`;
          newsletterForm.reset();
        }, 1000);
      });
    }
    
    // Load articles on the home page
    const articlesContainer = document.getElementById('articles-container');
    if (articlesContainer) {
      loadArticles(articles, articlesContainer);
      
      // Filter buttons functionality
      const filterBtns = document.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // Update active button
          filterBtns.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          // Filter articles
          if (filter === 'all') {
            loadArticles(articles, articlesContainer);
          } else {
            const filteredArticles = articles.filter(article => article.category === filter);
            loadArticles(filteredArticles, articlesContainer);
          }
        });
      });
      
      // Load more button
      const loadMoreBtn = document.getElementById('load-more-btn');
      if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
          // In a real application, this would load more articles from an API
          // For this demo, we'll just show a message
          this.textContent = 'No more articles';
          this.disabled = true;
          setTimeout(() => {
            this.textContent = 'Load More';
            this.disabled = false;
          }, 2000);
        });
      }
    }
    
    // Load single article page
    const articleContent = document.getElementById('article-content');
    if (articleContent) {
      // Get article ID from URL
      const urlParams = new URLSearchParams(window.location.search);
      const articleId = parseInt(urlParams.get('id'));
      
      if (articleId) {
        const article = articles.find(a => a.id === articleId);
        if (article) {
          // Update article content
          document.getElementById('article-title').textContent = article.title;
          document.getElementById('article-category').textContent = article.category;
          document.getElementById('article-date').textContent = article.date;
          document.getElementById('article-author').textContent = article.author;
          document.getElementById('article-image').src = article.image;
          document.getElementById('article-content').innerHTML = article.content;
          
          // Update tags
          const tagsContainer = document.getElementById('article-tags');
          article.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
          });
          
          // Load related articles
          const relatedArticlesContainer = document.getElementById('related-articles');
          const relatedArticles = articles
            .filter(a => a.id !== articleId && a.category === article.category)
            .slice(0, 3);
          
          loadArticles(relatedArticles, relatedArticlesContainer);
          
          // Comment form submission
          const commentForm = document.getElementById('comment-form');
          if (commentForm) {
            commentForm.addEventListener('submit', function(e) {
              e.preventDefault();
              const name = document.getElementById('name').value;
              const email = document.getElementById('comment-email').value;
              const comment = document.getElementById('comment').value;
              
              // Add comment to the page
              addComment(name, comment);
              commentForm.reset();
            });
          }
          
          // Add sample comments
          addComment('Michael Brown', 'Great article! I learned a lot about the latest trends in web development.');
          addComment('Lisa Johnson', 'I\'ve been using AI-powered development tools for a few months now, and they\'ve definitely improved my productivity.');
        }
      }
    }
  });
  
  // Function to load articles into a container
  function loadArticles(articlesArray, container) {
    container.innerHTML = '';
    
    articlesArray.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'article-card';
      articleCard.innerHTML = `
        <div class="article-card-img">
          <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="article-card-content">
          <div class="article-meta">
            <span class="category">${article.category}</span>
            <span class="date">${article.date}</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <a href="article.html?id=${article.id}" class="read-more">Read More</a>
        </div>
      `;
      container.appendChild(articleCard);
    });
  }
  
  // Function to add a comment
  function addComment(name, commentText) {
    const commentsContainer = document.getElementById('comments-container');
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    commentElement.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">${name}</span>
        <span class="comment-date">${formattedDate}</span>
      </div>
      <div class="comment-body">
        <p>${commentText}</p>
      </div>
    `;
    
    commentsContainer.prepend(commentElement);
  }