import { TfiYoutube } from 'react-icons/tfi';
import { FaRedditAlien, FaTiktok, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter, FaSquareThreads, FaWeixin } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiWechatChannelsLine } from 'react-icons/ri';

const baseSiteConfig = {
	name: 'XnetVPN',
	description: '永远都能连上的科学上网工具，稳定运营超6年，从未有一天中断过，20年国际通讯品牌，安全有保证',
	url: 'https://xnetvpn.com',
	ogImage: 'https://landingpage.inwind.cn/logo.png',
	metadataBase: '/',
	keywords: [
		'免费VPN',
		'科学上网',
		' shadowrocket',
		'小飞机',
		'Hysteria2',
		'v2ray',
	],
	authors: [
		{
			name: 'xnetvpn',
			url: 'https://xnetvpn.com',
		},
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/logo.png',
		apple: '/logo.png',
	}
};

export const SiteConfig = {
	...baseSiteConfig,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: baseSiteConfig.url,
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		siteName: baseSiteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: baseSiteConfig.name,
		description: baseSiteConfig.description,
		images: [`${baseSiteConfig.url}/og.png`],
		creator: baseSiteConfig.creator,
	},
};
