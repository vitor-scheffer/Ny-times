import PageHeader from '../../components/PageHeader/PageHeader';

const Ciencia = () => {
	const navArray = [
		'DealBook',
		'Markets',
		'Economy',
		'Energy',
		'Media',
		'Technology',
		'Personal Tech',
		'Small Business',
		'Your Money',
		'Mutual Funds & ETFs',
	];

	return (
		<div>
			<PageHeader title='Science' navArray={navArray} />
		</div>
	);
};
export default Ciencia;
