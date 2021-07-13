import React from "react";
import { endpoints } from "../../endpoints";
import Category from "./partials/category";
import { Container, Row, Col } from "react-bootstrap";

const Reddit = () => {
	return (
		<Container>
			<Row>
				<Col md={12}>
					{/* Qui al posto del map devi matchare la categoria dei parametri url con quella presente dentro la configurazione */}
					{endpoints.map((endpoint, index) => (
						<Category
							key={index}
							title={endpoint.title}
							subreddits={endpoint.redditPath}
						/>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default Reddit;
