import { Separator } from "@/components/ui/separator";

import { getAllProjects } from "../../lib/projects";
import { setRequestLocale } from "next-intl/server";

// Page sections
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";
import Navbar from "../../components/layouts/Navbar";
import Hobbies from "../../components/Hobbies";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Technologies from "../../components/Technologies";
import Certifications from "../../components/Certifications";
import { MotionDiv } from "../../components/ui/MotionDiv";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const projects = getAllProjects(locale, [
    "title",
    "date",
    "slug",
    "address",
    "content",
    "image",
    "excerpt",
    "order",
    "landingpage",  
  ]);

  return (
    <div>
      <Navbar floating />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <AboutMe />
        <Skills />
        <Projects projects={projects} />
        <Certifications />
        <Hobbies />
        <Technologies />
        <div className="page pb-16">
          <Separator />
        </div>
        <Footer />
      </MotionDiv>
    </div>
  );
}
