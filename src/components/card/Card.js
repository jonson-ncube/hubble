import { StyledCard } from './Styled.Card'
export default function Card({ item: { id, title, body, image } }) {
	return (
		<StyledCard layout={id % 2 === 0 && 'row-reverse'}>
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={image} alt={title} />
			</div>
		</StyledCard>
	)
}
