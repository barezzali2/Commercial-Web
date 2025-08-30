import HeroSection from "@/app/components/home/HeroSection";
import GoalsSection from "@/app/components/home/GoalsSection";
import ServicesSection from "./components/home/ServicesSection";
import PlansSection from "./components/home/PlansSection";
import SignUpSection from "./components/home/SignUpSection";
import PostsSection from "./components/home/PostsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GoalsSection />
      <ServicesSection />
      <PlansSection />
      <PostsSection />
      <SignUpSection />
    </>
  );
}
