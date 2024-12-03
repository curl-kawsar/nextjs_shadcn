import Newspage from "@/app/home/page";
import Banner from "@/components/ui/banner";
import PageLayout from "@/components/shared/PageLayout";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <PageLayout>
        <Banner />
      </PageLayout>
      <Newspage />
      <Footer />
    </div>
  );
}