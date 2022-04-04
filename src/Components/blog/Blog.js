import React from 'react';

const Blog = () => {
    return (
        <div className='flex'>
            <div className='border-8 py-4 px-4'>
            <h1 className='text-4xl font-bold'>what is cemantic tag?</h1>
                <p className='text-3xl font-mono'>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the  tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial.</p>
            </div>
            <div className='border-8 py-4 px-4'>
                <h1 className='text-4xl font-bold'>What is contax api?</h1>
                <p className='text-3xl font-mono'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
        </div>
    );
};

export default Blog;