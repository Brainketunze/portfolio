"use-strict";

import { displayImportandProjects } from "./only-projects.js";
const RenderImportantProjects = function () {
	fetch("https://api.github.com/users/Brainketunze/repos")
		.then((responds) => responds.json())
		.then((gotData) => {
			for (let i = 0; i < gotData.length; i++) {
				if (gotData[i].name === "Promofocus") {
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
				
			}
		})
		.catch((err) => console.error(err));
};
RenderImportantProjects();
