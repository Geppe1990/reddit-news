import React from "react";
import { Card } from "react-bootstrap";

const CardWrapper = ({ color, bgColor, link, title, content }) => {
	return (
		<Card className={bgColor ? bgColor : "bg-primary"}>
			<Card.Body>
				<Card.Title className="h6 m-0">
					{link && title ? (
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className={color ? color : "text-white"}
						>
							<span
								dangerouslySetInnerHTML={{
									__html: title
								}}
							/>
						</a>
					) : null}
					{title && !link ? (
						<span
							className={color ? color : "text-white"}
							dangerouslySetInnerHTML={{
								__html: title
							}}
						/>
					) : null}
				</Card.Title>
				{content ? <Card.Text>{content}</Card.Text> : null}
			</Card.Body>
		</Card>
	);
};

export default CardWrapper;
