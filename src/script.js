const graph = Viva.Graph.graph();
const graphics = Viva.Graph.View.svgGraphics();
const nodeSize = 24;


function initDarkMode() {
	const darkModeToggle = document.getElementById('darkModeToggle');
	const body = document.body;
	
	
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		body.classList.add('dark-mode');
	}
	
	
	darkModeToggle.addEventListener('click', () => {
		body.classList.toggle('dark-mode');
		
		
		if (body.classList.contains('dark-mode')) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
		
		
		updateSVGTextColors();
	});
}


function updateSVGTextColors() {
	const isDarkMode = document.body.classList.contains('dark-mode');
	const textColor = isDarkMode ? '#ffffff' : '#000000';
	
	
	const svgTexts = document.querySelectorAll('svg text');
	svgTexts.forEach(text => {
		text.setAttribute('fill', textColor);
	});
}

const init = async () => {
	const response = await fetch("../data/stations.json");
	const stations = await response.json();

	const searchDropdown = document.getElementById("searchDropdown");

	
	for (let station in stations) {
		graph.addNode(station, stations[station]);

		var span = document.createElement("span");
		span.style.display = "none";
		span.classList.add("search-item");
		span.innerHTML = stations[station].translations.fa;
		span.addEventListener("mousedown", function (e) {
			RenderNodeProperties({ data: stations[station] });
		});
		searchDropdown.appendChild(span);

		for (let relationship of stations[station].relations) {
			graph.addLink(station, relationship);
		}
	}

	
	graphics.node((node) => {
		console.log(node.data);
		const ui = Viva.Graph.svg("g");
		ui.on("click", function (e) {
			RenderNodeProperties(node);
		});
		ui.on("touchstart", function (e) {
			e.preventDefault(); 
			RenderNodeProperties(node);
		});
		
		
		const isDarkMode = document.body.classList.contains('dark-mode');
		const textColor = isDarkMode ? '#ffffff' : '#000000';
		
		const svgText = Viva.Graph.svg("text")
			.attr("x", "15px")
			.attr("y", "5px")
			.attr("font-size", "11px")
			.attr("font-weight", "bold")
			.attr("font-family", "Vazirmatn, sans-serif")
			.attr("fill", textColor)
			.attr("text-anchor", "start")
			.text(node.data?.translations.fa || "");
			
		const svgTexten = Viva.Graph.svg("text")
			.attr("x", "15px")
			.attr("y", "-8px")
			.attr("font-size", "10px")
			.attr("font-weight", "bold")
			.attr("font-family", "Vazirmatn, sans-serif")
			.attr("fill", textColor)
			.attr("text-anchor", "start")
			.text(node.data?.name || "");

		const svgRect = Viva.Graph.svg("rect")
			.attr("width", "10px")
			.attr("height", "10px")
			.attr("fill", node.data?.colors[0] || "black")
			.attr("y", "10px")
			.attr("x", "10px")
			.attr("rx", "150px");
		if (node.data?.colors[1]) {
			const svg2Rect = Viva.Graph.svg("rect")
				.attr("width", "15px")
				.attr("height", "15px")
				.attr("rx", "150px")
				.attr("fill", node.data?.colors[1] || "black")
				.attr("y", "7.5px")
				.attr("x", "7.5px");
			ui.append(svg2Rect);
		}
		if (node.data.disabled) {
			const svg4Rect = Viva.Graph.svg("rect")
				.attr("width", "15px")
				.attr("height", "15px")
				.attr("rx", "150px")
				.attr("strock", "black")
				.attr("stroke-dasharray", "3 3")
				.attr("y", "7.5px")
				.attr("x", "7.5px");
			ui.append(svg4Rect);
		}
		ui.append(svgTexten);
		ui.append(svgText);
		ui.append(svgRect);
		return ui;
	});

	graphics.placeNode(function (nodeUI, pos) {
		nodeUI.attr(
			"transform",
			"translate(" +
				(pos.x - nodeSize / 2) +
				"," +
				(pos.y - nodeSize / 2) +
				")",
		);
	});

	const layout = Viva.Graph.Layout.forceDirected(graph, {
		springLength: 50,
		springCoeff: 0.0005,
		dragCoeff: 0.02,
		gravity: -5,
	});

	const renderer = Viva.Graph.View.renderer(graph, {
		layout,
		graphics,
		container: document.getElementById("graph"),
	});
	renderer.run();
	
	
	initDarkMode();
	
	
	setTimeout(updateSVGTextColors, 100);
};

function closeSearch() {
	const items = document.querySelectorAll(".search-item");
	for (let i = 0; i < items.length; i++) {
		items[i].style.display = "none";
	}
}

function searchStation() {
	closeDialog();
	const serachInput = document.getElementById("serach-input");
	const filter = serachInput.value.toUpperCase();
	const items = document.querySelectorAll(".search-item");

	for (let i = 0; i < items.length; i++) {
		txtValue = items[i].textContent || a[i].innerText;
		if (filter == "") {
			items[i].style.display = "none";
		} else if (txtValue.toUpperCase().indexOf(filter) > -1) {
			items[i].style.display = "block";
		} else {
			items[i].style.display = "none";
		}
	}
}

function RenderNodeProperties(node) {
	closeSearch();
	const dialog = document.getElementById("nodePropertiesDialog");
	const nodeNameElement = document.getElementById("nodeName");
	const nodeAddressElement = document.getElementById("nodeAddress");
	const nodeLinesElement = document.getElementById("nodeLines");
	const nodeEmojisElement = document.getElementById("nodeEmojis");
	const closeButton = document.getElementById("closeDialogBtn");
	const dialogBody = dialog.querySelector(".dialog-body");

	const hasWC = node.data.wc || false;
	const WcEmoji = hasWC ? "🚾" : "";

	const hasFastfood = node.data.fastFood || false;
	const FastfoodEmoji = hasFastfood ? "🍔" : "";

	const hasGroceryStore = node.data.groceryStore || false;
	const GroceryStoreEmoji = hasGroceryStore ? "🛒" : "";

	const hasatm = node.data.atm || false;
	const atmEmoji = hasatm ? "🏧" : "";

	const hasCoffeeShop = node.data.coffeeShop || false;
	const CoffeeShopEmoji = hasCoffeeShop ? "☕" : "";

	nodeNameElement.textContent = node.data.translations?.fa || node.data.name || "";

	const hasNearShrine = !!node.data.NearHolyshrine;
	const existingShrine = dialogBody.querySelector(".shrine-alert");
	if (existingShrine) existingShrine.remove();
	if (hasNearShrine) {
		const shrineP = document.createElement("p");
		shrineP.className = "shrine-alert";
		shrineP.innerHTML = `🕌 <strong>نزدیک‌ترین ایستگاه به حرم مطهر</strong>`;
		const firstChild = dialogBody.firstElementChild;
		if (firstChild) dialogBody.insertBefore(shrineP, firstChild);
		else dialogBody.appendChild(shrineP);
	}

	if (node.data.lines && Array.isArray(node.data.lines)) {
		nodeLinesElement.innerHTML = node.data.lines
			.map((line, i) => {
				const color = (node.data.colors && node.data.colors[i]) || (node.data.colors && node.data.colors[0]) || "#777";
				return `<span class="node-line-number" style="color:${color};">${line}</span>`;
			})
			.join(' <span class="line-separator">و</span> ');
	} else {
		nodeLinesElement.innerHTML = "";
	}

	nodeAddressElement.innerHTML = node.data.address ? `${node.data.address}` : `به زودی ...`;

	const emojis = [
		hasWC ? `<span class="emoji-badge">${WcEmoji}</span>` : "",
		hasFastfood ? `<span class="emoji-badge">${FastfoodEmoji}</span>` : "",
		hasGroceryStore ? `<span class="emoji-badge">${GroceryStoreEmoji}</span>` : "",
		hasatm ? `<span class="emoji-badge">${atmEmoji}</span>` : "",
		hasCoffeeShop ? `<span class="emoji-badge">${CoffeeShopEmoji}</span>` : ""
	].filter(Boolean).join(" ");
	nodeEmojisElement.innerHTML = emojis;

	dialog.style.display = "block";
	dialog.classList.add("show");

	closeButton.onclick = function () {
		dialog.style.display = "none";
		dialog.classList.remove("show");
	};
}



function closeDialog() {
	const dialog = document.getElementById("nodePropertiesDialog");
	dialog.style.display = "none";
}

init();