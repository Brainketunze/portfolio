"use-strict";

import { displayImportandProjects } from "./only-projects.js";
const RenderImportantProjects = function () {
	fetch("https://api.github.com/users/Brainketunze/repos")
		.then((responds) => responds.json())
		.then((gotData) => {
			for (let i = 0; i < gotData.length; i++) {
				if (gotData[i].name === "Javascript-quiz") {
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}
				if (gotData[i].name === "app-theme") {
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}
				if (gotData[i].name === "Count-down-Timer") {
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}

				if (gotData[i].name === "election_demo") {
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}
				if (gotData[i].name === "Many-TodoList-Prototype") {
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}
				if (gotData[i].name === "Development-strategy-semantic-layout") {
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}
				if (gotData[i].name === "TodoList-Practical-JS") {
					console.log("YESSSSSS");
					let newContainer = new displayImportandProjects(gotData[i]);
					newContainer.renderEachRepository();
				}
			}
		})
		.catch((err) => console.error(err));
};
RenderImportantProjects();
