import React from "react";

const Blog = () => {
  return (
    <div className="my-8 mx-4 md:mx-16">
      <div className="text-center">
        <h1
          data-aos="zoom-in-down"
          className="inline-block text-3xl my-6 text-red-600 mx-auto font-bold pb-2 border-b-4 border-b-red-400 border-dotted"
        >
          Popular Blogs
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg bg-white hover:bg-red-200 duration-500 shadow-2xl cursor-pointer my-6"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <div className="w-full md:w-[300px] mx-auto md:mx-0">
          <img
            className="bg-white w-full h-full rounded"
            src="https://i.ibb.co/gWcBW06/js-vs-nodejs.png"
            alt="js-vs-nodejs"
          />
        </div>
        <div className="w-full lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-4">
            What is the difference between Javascript & nodejs?
          </h1>
          <p className="text-gray-500">
            <strong>Ans: </strong>JavaScript is a single threaded, high quality,
            dynamic, scripting/programming language. Javascript run on browser
            using browser engine. On the other hand, Node JS is a Javascript
            runtime environment. Which is run on the v8 engine and give the
            result of JavaScript code.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg bg-white hover:bg-red-200 duration-500 shadow-2xl cursor-pointer my-6"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <div className="w-full md:w-[300px] mx-auto md:mx-0">
          <img
            className="bg-white w-full h-full rounded"
            src="https://i.ibb.co/bbv3WkR/node-mongodb.png"
            alt="js-vs-nodejs"
          />
        </div>
        <div className="w-full lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-4">
            When should you use MongoDB & When should you use Node JS?
          </h1>
          <p className="text-gray-500">
            <strong>Ans: </strong>MongoDB & Node JS both are developer
            technologies. But these are different. MongoDB is open source
            cross-platform document-oriented database program. It's a NoSQL
            database program. It allows to store data. <br />
            Node JS is JavaScript runtime environment. Basically it is used to
            create server. Node JS used to load, delete, update, create
            database. It's take a request from client side then find the result
            in database adn send the result to client-side.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg bg-white hover:bg-red-200 duration-500 shadow-2xl cursor-pointer my-6"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="w-full md:w-[300px] mx-auto md:mx-0">
          <img
            className="bg-white w-full h-full rounded"
            src="https://i.ibb.co/Kzspwfm/sql-nosql.jpg"
            alt="js-vs-nodejs"
          />
        </div>
        <div className="w-full lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-4">
            What is the difference between SQL & NoSQL database?
          </h1>
          <p className="text-gray-500">
            <strong>Ans: </strong>SQl and NoSQL both are database program. But
            these are totally different.
            <ul className="list-disc ml-4 mt-4">
              <li>
                SQL database maintain a structure to store data. NoSQL database
                are unstructured.
              </li>
              <li>
                SQL database are table-based, but NoSQL database are
                document-based program.
              </li>
              <li>
                SQL databases are vertically scalable. But NoSQL databases are
                horizontally scalable.
              </li>
              <li>
                SQL are relational database. NoSQL are non-relational database.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg bg-white hover:bg-red-200 duration-500 shadow-2xl cursor-pointer my-6"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="w-full md:w-[300px] mx-auto md:mx-0">
          <img
            className="bg-white w-full h-full rounded"
            src="https://i.ibb.co/V9fYMbM/jwt.png"
            alt="js-vs-nodejs"
          />
        </div>
        <div className="w-full lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-4">
            What is the purpose of jwt? And how does it work?
          </h1>
          <p className="text-gray-500">
            <strong>Ans: </strong>JWT (JSON Web Token) is a open standard used
            to share information between client and server securely. JWT
            structure is divided into three parts: header, payload, signature &
            is separated from each other by dot(.).
            <br />
            When an user logged in to website he/she take a secret key. When a
            request send to server, server verify the secret key that is valid
            or not. If it is valid server send the result.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
