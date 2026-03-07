"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "lucide-react";
import packageJSON from "@/package.json"

type FooterLink = {
	title: string;
	href: string;
	icon?: ReactNode;
};

type FooterSection = {
	label: string;
	links: FooterLink[];
};

const footerLinks: FooterSection[] = [
	{
		label: "Продукты",
		links: [
			{ title: "Возмодности", href: "#" },
			{ title: "Цены", href: "#" },
			{ title: "Интеграции", href: "#" },
		],
	},
	{
		label: "О компании",
		links: [
			{ title: "Вопросы и ответы", href: "#" },
			{ title: "О нас", href: "#" },
			{ title: "Политика конфедициальности", href: "#" },
		],
	},
	{
		label: "Ресурсы",
		links: [
			{ title: "Блог", href: "#" },
			{ title: "Список изменений", href: "#" },
			{ title: "Бренд", href: "#" },
			{ title: "Помощь", href: "#" },
		],
	},
	{
		label: "Социальные сети",
		links: [
			{
				title: "ВКонтакте",
				href: "#",
				icon: (
					<FacebookIcon
					/>
				),
			},
			{
				title: "GitHub",
				href: "#",
				icon: (
					<InstagramIcon
					/>
				),
			},
			{
				title: "Telegram",
				href: "#",
				icon: (
					<YoutubeIcon
					/>
				),
			},
			{
				title: "YouTube",
				href: "#",
				icon: (
					<LinkedinIcon
					/>
				),
			},
		],
	},
];

export function Footer() {
	return (
		<footer
			className={cn(
				"relative mx-auto flex w-full max-w-7xl bg-yellow-400/70 flex-col items-center justify-center rounded-t-4xl border-t px-6 backdrop-blur-sm md:rounded-t-6xl md:px-8",
				"dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]"
			)}
		>
			<div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

			<div className="grid w-full gap-8 py-6 md:py-8 lg:grid-cols-3 lg:gap-8">
                <div>
                    <Logo className="h-8" />
                    <p className="mt-8 text-sm md:mt-0">
                        Блог о мире техлогий
                    </p>
                </div>
				

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 lg:mt-0">
					{footerLinks.map((section, index) => (
						
							<div key={index} className="mb-10 md:mb-0">
								<h3 className="text-xs font-bold">{section.label}</h3>
								<ul className="mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												className="inline-flex items-center duration-250 hover:text-foreground [&_svg]:me-1 [&_svg]:size-4"
												href={link.href}
												key={`${section.label}-${link.title}`}
											>
												{link.icon}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						
					))}
				</div>
			</div>
			<div className="h-px w-full bg-linear-to-r via-black " />
			<div className="flex w-full items-center justify-center py-4">
				<p className="text-sm">
					ver.{packageJSON.version} &copy; 2022-{new Date().getFullYear()} Hanriel, Все права защищены
				</p>
			</div>
		</footer>
	);
}