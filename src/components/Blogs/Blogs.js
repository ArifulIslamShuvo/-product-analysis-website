import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 my-10 text-justify'>
           <h1 className='font-bold text-xl'>Context API :</h1> 
           <p>In React we usually send data from one component to another. In that case, the data of one component has to be sent to another child component as props. Often there is a situation where the child component is much lower than our main component where your data is. That means that the data component has another child component, again that child component has another child component. There may be many children doing this. Now if we want to take data from the main component of what we call a top-level component to a child component below many levels, then we have to take all the help from the parent of that child component and the parent of that parent to the data component or up to the top-level component. To pass data. It's like taking data while digging. We usually use Redux in such situations. Or the situation may be more complicated than that. In that case, we have a global status that any child can access later if they want, without having to pass all the components as props and take data.</p>
           
           <h1 className='font-bold text-xl mt-4'>Semantic Elements :</h1>
           {
               `Elements such as <header>, <footer>, and <article> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.

               A semantic element clearly describes its meaning to both the browser and the developer.
               Examples of non­semantic elements: <div> and <span> ­ Tells nothing about its content.
               Examples of semantic elements: <form>, <table>, and <article> ­ Clearly defines its
               content.`
           }
           
        </div>
    );
};

export default Blogs;