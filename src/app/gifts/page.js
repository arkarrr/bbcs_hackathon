"use client"
import { Button } from "@/components/ui/button";
import HomeSidebar from "@/components/HomeSidebar";
import CreateCard from "@/components/CreateCard";
import PostsCards from "@/components/PostsCards";
import WalletCard from "@/components/WalletCard";
import TopDonorsCard from "@/components/TopDonorsCard";

const sampleWishes = [
  {
    userName: "John Doe",
    userHandle: "johndoe",
    userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Wishing for a new gaming console this Christmas! 🎮",
    goalAmount: 500,
    currentAmount: 150,
    images: [
      "https://cdn.mos.cms.futurecdn.net/HkdMToxijoHfz4JwUgfh3G-1920-80.jpg.webp",
      "https://ichef.bbci.co.uk/news/1536/cpsprodpb/f310/live/f36de0e0-6f86-11ef-b410-fbf02dca0fc5.png.webp",
    ],
  },
  {
    userName: "Jane Smith",
    userHandle: "janesmith",
    userAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Hoping to get a new bicycle for my birthday! 🚴‍♀️",
    goalAmount: 300,
    currentAmount: 100,
    images: [
      "https://global.honda/en/japan-mobility-show/2023/info/Honda_e-MTB_Concept/images/main.jpg"
    ],
  },
];


export default function Home() {
  const handleWishSubmit = (data) => {
    console.log("Wish Submitted:", data);
  };

  return (
    <>
      <main className="bg-cream text-white flex flex-row max-h-screen">
        <HomeSidebar />
        <div className="w-2/4 overflow-scroll">
          <CreateCard
            title="Create a Wish"
            showPrice={true}
            showDeadline={false}
            onSubmit={handleWishSubmit}
          />
          <PostsCards data={sampleWishes} type="wish" />
        </div>
        <div className="w-1/4 overflow-scroll">
          <WalletCard />
          <TopDonorsCard />
        </div>
      </main>
    </>
  );
}
