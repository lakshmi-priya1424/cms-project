import { useContext } from 'react';
import StorageContext from '../../context/StorageContext';
import Card from '../../components/Card';

export default function View() {
	const { items } = useContext(StorageContext); 

	return (
		<div className="flex flex-wrap gap-5">
			{items.map((value, index) => {
				return <Card key={index} item={value} index={index} />;
			})}
		</div>
	);
}