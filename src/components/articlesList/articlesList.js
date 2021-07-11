import React from "react";
import { endpoints } from "../../endpoints";
import Category from "../category/category";
import { Container, Row, Col } from "react-bootstrap";

const ArticlesList = () => {
	return (
		<Container>
			<Row>
				<Col md={8}>
					{/* Qui al posto del map devi matchare la categoria dei parametri url con quella presente dentro la configurazione */}
					{endpoints.map((endpoint, index) => (
						<Category
							key={index}
							title={endpoint.title}
							subreddits={endpoint.paths}
						/>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default ArticlesList;
