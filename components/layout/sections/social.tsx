"use client";

import { SimpleIconsX } from "@/components/svg/x";
import { LinkedinIcon, FacebookIcon, LucideMail } from "lucide-react";

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	ariaLabel: string;
}

const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => (
	<a
		href={href}
		className="transition-colors hover:text-blue-400"
		target="_blank"
		rel="noopener noreferrer"
		aria-label={ariaLabel}
	>
		{icon}
	</a>
);

const socialLinks = [
	{
		href: "https://facebook.com",
		icon: <LinkedinIcon size={24} />,
		ariaLabel: "访问 LinkedIn",
	},
	{
		href: "https://facebook.com",
		icon: <FacebookIcon size={24} />,
		ariaLabel: "访问 Facebook",
	},
	{
		href: "https://instagram.com",
		icon: <SimpleIconsX size={20} />,
		ariaLabel: "访问 X（Twitter）",
	},
	{
		href: "https://youtube.com",
		icon: <LucideMail size={24} />,
		ariaLabel: "发送邮件",
	},
];

export const Social = () => {
	return (
		<div className="flex space-x-6">
			{socialLinks.map((link, index) => (
				<SocialLink key={index} {...link} />
			))}
		</div>
	);
};
