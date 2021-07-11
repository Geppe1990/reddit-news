import React from "react";
import "./articlesList.scss";
import { endpoints } from "../../endpoints";
import Category from "../category/category";
import { Container, Row, Col } from "react-bootstrap";

const ArticlesList = () => {
	return (
		<Container>
			<Row>
				<Col md={8}>
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
