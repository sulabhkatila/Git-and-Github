import { useEffect, useState } from 'react';

export default function BetaBanner() {
	const [betaBannerText, setBetaBannerText] = useState('Loading...');

	useEffect(() => {
		fetch('betabanner.txt')
			.then(response => response.text())
			.then(text => setBetaBannerText(text))
			.catch(error => {
				console.error('Error loading beta banner:', error);
				setBetaBannerText('unable to load beta banner text');
			});
	}, []);

	return (
		<div className="beta-banner">
			<p>{betaBannerText}</p>
		</div>
	);
}
