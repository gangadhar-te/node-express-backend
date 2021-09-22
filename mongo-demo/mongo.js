const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/demo")
   .then(() => console.log('Connected to MongoDB'))
   .catch( (err) => console.log('Could not connect to MongoDB',err));

    const postSchema = new mongoose.Schema({
        name: { 
            type: String, 
            required: true,
            minlength: 5,
            maxlength: 30,
            // match: /pattern/ 
            lowercase: true,
            // uppercase: true
        },
        category: {
            type: String,
            required: true,
            // enum: ['tech','study','exams'],
            trim: true

        },
        author: {
            type: String,
            validate: {
                validator: function(v) {
                    return v.length>0;
                },
                message: 'A post should have a author name'
            }
        },
        tags: [ String ],
        isPublished: Boolean,
        price: {
            type: Number,
            required: function() { return this.isPublished },
            get: v => Math.round(v),
            set: v => Math.round(v)
        }
    });
    
    const Post = mongoose.model('Post', postSchema);

async function createPost(){
    const post = new Post({
        name:'MEAN stack',
        author:'Gurunath',
        category:'   study',
        tags: ['frontend','backend'],
        isPublished: true,
        price:51.56
    });
    try{
    const result = await post.save();
    console.log(result);
    }
    catch(er) {
        console.log(er.message);
    }
};

async function getPosts(){
    const posts = await Post
    .find({author:"Gangadhar"})
    console.log(posts);
}

getPosts();



