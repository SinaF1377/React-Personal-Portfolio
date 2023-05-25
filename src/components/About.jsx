import React from "react";

function About() {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
          facilis earum ex deserunt maxime iure eum, magnam ipsa sunt a cum enim
          similique! Quod quae accusamus similique rem dolores possimus, impedit
          dicta corrupti laboriosam adipisci sapiente ipsam distinctio
          necessitatibus dolore excepturi itaque reiciendis cum minus. Rerum
          eveniet est sit reiciendis!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, odio
          aliquam aperiam fuga eum minima consectetur ut veritatis non omnis,
          debitis culpa, deleniti natus neque possimus asperiores. Placeat
          reprehenderit quibusdam corrupti eius eaque explicabo porro rerum.
          Delectus, tempora officia error unde molestiae tempore magni sit
          iusto, dolorum consequatur eaque dolore!
        </p>
      </div>
    </div>
  );
}

export default About;
