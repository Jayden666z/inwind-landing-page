'use client';
import { motion } from 'framer-motion';
import { SiAndroid } from 'react-icons/si';
import { useEffect, useState } from 'react';

export default function Hero({ locale }) {
	const [tilt, setTilt] = useState(45);
	const [os, setOs] = useState('');

	useEffect(() => {
		const detectOS = () => {
			const userAgent = navigator.userAgent;
			if (userAgent.includes('Win')) return 'Windows';
			if (userAgent.includes('Mac')) return 'Mac';
			if (userAgent.includes('Linux')) return 'Linux';
			if (userAgent.includes('Android')) return 'Android';
			if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
			return 'Unknown';
		};
		setOs(detectOS());
		const handleScroll = () => {
			const maxTilt = 45; 
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0);
			setTilt(tiltValue);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<section
				className='relative z-10 flex flex-col items-center py-10 md:py-20 overflow-hidden'
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
					<div className='w-full flex justify-center mb-5 md:mb-10'>
						<h2 className='text-xl md:text-2xl text-base-content/80 text-center'>
							{locale.h2}
						</h2>
					</div>
					<div className='w-full flex justify-center'>
						<a
							title='Download for Android'
							className='btn btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full py-3 px-6'
							href='https://down.xnetvpn.com/downloads/app-release.apk'
						>
							<SiAndroid />
							{"Android 客户端下载"}
						</a>
					</div>

					<div className='w-full flex justify-center mt-5'>
        <img
            src='/show.png' // 替换为你的图片路径
            alt='描述性文字' // 替换为适当的描述性文字
            className='my-4' // 可根据需要添加样式
        />
    </div>
				</motion.div>
			</section>
			<div className='absolute w-full left-0 top-10 md:top-20 h-[300px]'>
				{/* SVG pattern and background code remains unchanged */}
			</div>
		</>
	);
}
