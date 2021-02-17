export class displayImportandProjects {
	homepage = null;
	html_url = null;
	name = null;
	constructor(repositoriesData) {
		Object.assign(this, repositoriesData);
	}
	renderEachRepository() {
		let sectionEl = document.createElement("section");
		let h2ElOne = document.createElement("h2");
		let h2ElTwo = document.createElement("h2");
		let aElOne = document.createElement("a");
		let aElTwo = document.createElement("a");
		if (this.name === "acme-web-designed") {
			sectionEl.className = `direct-project two`;
		}
		if (this.name === "app-theme") {
			sectionEl.className = `direct-project three`;
		}
		if (this.name === "pomofocus-") {
			sectionEl.className = `direct-project eleven`;
		}
		if (this.name === "Count-down-Timer") {
			sectionEl.className = `direct-project eight`;
		}
		
		aElOne.innerHTML = "Source";
		aElOne.href = `${this.html_url}`;
		aElOne.target = "_blank";
		aElTwo.innerHTML = "Live";
		aElTwo.href = `${this.homepage}`;
		aElTwo.target = "_blank";
		h2ElOne.appendChild(aElOne);
		h2ElTwo.appendChild(aElTwo);
		sectionEl.appendChild(h2ElOne);
		sectionEl.appendChild(h2ElTwo);
		const importantProjects = document.getElementById("important-projects");
		importantProjects.appendChild(sectionEl);
		//return sectionEl;
	}
}
