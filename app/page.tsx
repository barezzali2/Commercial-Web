import Image from "next/image";
import HeroSection from "@/app//components/features/HeroSection";
import GoalsSection from "@/app/components/features/GoalsSection";
import ServicesSection from "./components/features/ServicesSection";
import PlansSection from "./components/features/PlansSection";
import SignUpSection from "./components/features/SignUpSection";
import PostsSection from "./components/features/PostsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GoalsSection />
      <ServicesSection />
      <PlansSection />
      <PostsSection />
      <SignUpSection />
    </div>
  );
}
