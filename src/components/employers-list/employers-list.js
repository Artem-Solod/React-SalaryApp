import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;

		const changeSalary = (curSalery) => {
			onChangeSalary(id, curSalery)
		}

		return (
			<EmployersListItem 
				key={id}
				{...itemProps}
				onChangeSalary={changeSalary}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
			/>
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployersList;