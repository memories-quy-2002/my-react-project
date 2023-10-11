import React from "react";
import FoodCardList from "../components/home/FoodCardList";
import SlideShow from "../components/home/SlideShow";
import Layout from "../components/layout/Layout";
import "../styles/Home.scss";

const Home = () => {
	return (
		<Layout>
			<div className="container-fluid home">
				<SlideShow />

				<div className="home__main">
					<div className="home__main__title">
						<h3>Find your recipes</h3>
					</div>
					<div className="home__main__search">
						<input type="text" placeholder="Search..."></input>
					</div>
					<FoodCardList />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
