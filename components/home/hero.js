'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub, SiAndroid, SiWindows11,SiApple,SiMacos } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function Hero({ locale, CTALocale }) {
	const [tilt, setTilt] = useState(45);
	const [duration, setDuration] = useState(0.8);
	const [os, setOs] = useState('');

	useEffect(() => {
		const detectOS = () => {
			const userAgent = navigator.userAgent;
			if (userAgent.indexOf('Win') !== -1) return 'Windows';
			if (userAgent.indexOf('Mac') !== -1) return 'Mac';
			if (userAgent.indexOf('Linux') !== -1) return 'Linux';
			if (userAgent.indexOf('Android') !== -1) return 'Android';
			if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) return 'iOS';
			return 'Unknown';
		};
		setOs(detectOS());

		const handleScroll = () => {
			const maxTilt = 45; 
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0);
			setTilt(tiltValue);
			setDuration(0.3);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<section
				className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
				style={{ perspective: '800px' }}
			>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 10 }}
				>
					<h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
						{locale.h1}
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.2,
						duration: 1,
					}}
				>
					<h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>{locale.h2}</h2>
					<div className='w-full md:w-8/12 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-y-5'>
						{/* <HeroIcons /> */}
						<div className='flex flex-col md:flex-row gap-2'>
							{/* <a
								title='get source code'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href='https://github.com/huglemon/inwind-landing-page'
							>
								<SiGithub />
								{CTALocale.btn1}
							</a>
							 */}

<a
								title='Download for Android'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href='https://down.xnetvpn.com/downloads/app-release.apk'
							>
								<SiAndroid />
								{"Android 客户端下载" }
							</a>

							{/* <a
								title='Download for iPhone'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href=''
							>
								<SiApple />
								{os === 'iPhone' ? "iPhone 客户端下载" : ""}
							</a>

							<a
								title='Download for Windows'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href=''
							>
								<SiWindows11 />
								{os === 'Windows' ? "Windows 客户端下载" : ""}
							</a>


							<a
								title='Download for Mac'
								className='btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
								href=''
							>
								<SiMacos />
								{os === 'Mac' ? "Mac 客户端下载" : ""}
							</a> */}

					
					
							{/* <a
								title='Read the blog post'
								className='btn btn-sm md:btn-md btn-base rounded-full'
								href='https://huglemon.com/blog/i-open-sourced-a-saas-landing-page'
							>
								<IoDocumentText /> {CTALocale.btn2}
							</a> */}
						</div>
					</div>
				</motion.div>
			</section>
			<div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
				{/* SVG pattern and background code remains unchanged */}
			</div>
		</>
	);
}
