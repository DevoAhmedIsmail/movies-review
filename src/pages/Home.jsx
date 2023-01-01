import React from "react";
import Header from "../components/Header/Header";
import Slide from "../components/Slide/Slide";

const Home = () => {
  const data = [
    {
      id: 1,
      image: "https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
      title: "Puss in Boots: The Last Wish",
      date: "2022-12-07",
    },
    {
      id: 2,
      image: "https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
      title: "Puss in Boots: The Last Wish",
      date: "2022-12-07",
    },
    {
      id: 3,
      image: "https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
      title: "Puss in Boots: The Last Wish",
      date: "2022-12-07",
    },
    {
      id: 4,
      image: "https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
      title: "Puss in Boots: The Last Wish",
      date: "2022-12-07",
    },
    {
      id: 5,
      image: "https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
      title: "Puss in Boots: The Last Wish",
      date: "2022-12-07",
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="container mx-auto mt-5 lg:-mt-10">
        <h3 className="text-3xl mb-10">Popular</h3>
        {/* popular */}
        <div className="mx-8 lg:mx-0 ">
          <Slide data={data} />
        </div>
        {/* ./popular */}
      </div>
    </div>
  );
};

export default Home;
