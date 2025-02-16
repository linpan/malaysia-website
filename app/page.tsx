import Image from "next/image";
import { Header } from "@/components/layout/navbar";

import { FooterSection } from "@/components/layout/sections/footer";
import HeroSection from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";
import About from "@/components/layout/sections/about";
import { FeaturesSection } from "@/components/layout/sections/Features";
import Services from "@/components/layout/sections/services";

export const metadata = {
	title: "TalentPioneer - Your Strategic Partner in Southeast Asia",
	description:
		"TalentPioneer connects exceptional tech talent with top companies in Southeast Asia. We offer professional recruitment, career coaching, and targeted training programs to help you achieve your career goals.", // 更具吸引力的描述
	keywords:
		"tech recruitment southeast asia, software developer jobs singapore, IT jobs bangkok, career coaching for developers, talent acquisition southeast asia", // 更具体的关键词

	openGraph: {
		type: "website",
		url: "https://www.talentpioneer.com", // 正确的网站 URL
		title: "TalentPioneer - Your Strategic Partner in Southeast Asia",
		description:
			"TalentPioneer connects exceptional tech talent with top companies in Southeast Asia. We offer professional recruitment, career coaching, and targeted training programs to help you achieve your career goals.", // 与 metadata 中的 description 一致
		images: [
			{
				url: "https://www.talentpioneer.com/images/og-image.jpg", // 使用与品牌相关的图片，并替换为实际图片地址
				width: 1200,
				height: 630,
				alt: "TalentPioneer - Your Strategic Partner in Southeast Asia",
			},
		],
	},
};

export default function Home() {
	return (
		<div>
			<Header />
			<HeroSection />
			<SponsorsSection />
			<About />
			<FeaturesSection />
			<Services />
			<TeamSection />
			<ContactSection />
			<FAQSection />
			<FooterSection />
		</div>
	);
}
