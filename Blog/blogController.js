const blogSchema = require('./blogschema')


const newBlog = (req, res) => {
  const newBlogPost = new blogSchema({
    title:req.body.title,
    content:req.body.content,
    author:req.body.author,
    date: new Date()
  })

  newBlogPost.save()
    .then(data => {
      res.status(201).json({
        status: 200,
        msg: 'New blog added successfully',
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
};


// -----------------view all-----------------------

const viewBlog = (req, res) => {
  blogSchema.find()
    .then(blogs => {
      res.status(200).json(blogs);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

// ------------------individual----------------------

const individualBlog = (req, res) => {
  const { id } = req.params;

  blogSchema.findById(id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.status(200).json(blog);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};


// ------------------delete----------------------


const deleteBlog = (req, res) => {
  const { id } = req.params;

  blogSchema.findByIdAndDelete(id)
    .then(blog => {
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.status(200).json(blog);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
};

// ------------------edit----------------------
const editBlog = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  blogSchema.findByIdAndUpdate(id, { title, content, author, date: new Date() }, { new: true })
    .then(updatedBlog => {
      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.status(200).json({
        status: 200,
        msg: 'Blog updated successfully',
        data: updatedBlog
      });
    })
    .catch(err => {
      res.status(400).json({ message: err.message });
    });
};

module.exports={newBlog,viewBlog,individualBlog,deleteBlog,editBlog}
