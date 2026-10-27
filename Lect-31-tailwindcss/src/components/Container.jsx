
import React from 'react';
import { BiArchiveIn } from 'react-icons/bi';

function Container() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center text-center gap-6">
        
        <div className="bg-amber-100 p-5 rounded-full">
          <BiArchiveIn className="text-amber-600 text-5xl" />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-amber-800">
          Welcome to Mirai
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Itaque veniam eaque minus voluptate ipsum! Est suscipit
          veritatis totam expedita excepturi recusandae eum ipsum
          aliquam, soluta, officia ratione dicta ullam voluptatem iure?
          Nulla dolor architecto praesentium fugiat iusto minima magnam
          illo labore molestias. Perferendis minima unde placeat
          laboriosam officia impedit quas inventore dolor asperiores
          quam laudantium doloribus odio voluptatibus vitae architecto.
        </p>

        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 hover:scale-105 shadow-md">
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Container;
