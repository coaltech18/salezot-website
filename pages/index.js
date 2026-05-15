import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Founders from "@/components/Founders";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <Layout screenLabel="01 Home">
      <Marquee
        variant="ink"
        items={[
          "AI-POWERED REVENUE INTELLIGENCE",
          "FOR B2B SALES TEAMS",
          "ENTERPRISE-GRADE",
          "CONVERSATION INTELLIGENCE",
        ]}
      />

      <Hero />

      <Marquee
        variant="pink"
        items={[
          "CALL RECORDING & TRANSCRIPTION",
          "REAL-TIME AI COACHING",
          "CRM AUTO-SYNC",
          "DEAL RISK INTELLIGENCE",
        ]}
      />

      <Founders />

      <FinalCtaSection />

      <Marquee
        variant="blue"
        items={[
          "REQUEST ENTERPRISE DEMO",
          "INFO@SALEZOT.COM",
          "BENGALURU · BUILDING FOR THE WORLD",
          "TURNING CONVERSATIONS INTO REVENUE",
        ]}
      />
    </Layout>
  );
}
