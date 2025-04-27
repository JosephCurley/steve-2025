document.addEventListener('DOMContentLoaded', function() {
	const navElement = document.getElementById('main-navigation');
	const currentPathElement = document.getElementById('current-path');
	const screenShotElement = document.getElementById('screen-shot');
	// State object to track expanded sections and items
	const state = {
			expandedSections: {},
			expandedItems: {}
	};
	
	// Function to build top-level navigation
	function buildNavigation() {
			const sectionsList = document.createElement('ul');
			sectionsList.className = 'nav-sections';
			
			for (const section in navigationData) {
					const sectionItem = document.createElement('li');
					sectionItem.className = 'nav-section';
					
					const sectionTitle = document.createElement('div');
					sectionTitle.className = 'section-title';
					sectionTitle.textContent = section;
					
					
					sectionTitle.addEventListener('click', function() {
							toggleSection(section, sectionItem);
					});
					
					sectionItem.appendChild(sectionTitle);
					sectionsList.appendChild(sectionItem);
			}
			
			navElement.appendChild(sectionsList);
	}
	
	// Function to toggle a section
	function toggleSection(section, sectionItem) {
			// Check if already expanded
			if (state.expandedSections[section]) {
					// Remove the submenu if it exists
					const existingSubmenu = sectionItem.querySelector('.submenu');
					if (existingSubmenu) {
							sectionItem.removeChild(existingSubmenu);
					}
					
					// Update state and arrow
					state.expandedSections[section] = false;

					// Change icon to closed folder
					sectionItem.querySelector('.section-title').classList.remove('open-folder');
			} else {
					// Build submenu
					const subMenu = buildSubMenu(navigationData[section], 1);
					sectionItem.appendChild(subMenu);
					
					// Update state and arrow
					state.expandedSections[section] = true;
					
					// Change icon to open folder
					sectionItem.querySelector('.section-title').classList.add('open-folder');
			}
	}
	
	// Function to build submenu recursively
	function buildSubMenu(data, level) {
			const subMenuList = document.createElement('ul');
			subMenuList.className = `submenu level-${level}`;
			
			for (const key in data) {
					const value = data[key];
					const isObject = typeof value === 'object';
					
					const listItem = document.createElement('li');
					if (isObject) {
							listItem.className = 'has-children';
							
							const submenuTitle = document.createElement('div');
							submenuTitle.className = 'submenu-title';
							submenuTitle.textContent = key;

							
							submenuTitle.addEventListener('click', function() {
									toggleItem(key, listItem, value, level + 1);
							});
							
							listItem.appendChild(submenuTitle);
					} else {
							const link = document.createElement('a');
							link.className = 'nav-link';
							link.textContent = key;
							link.href = '#'; // Prevent default behavior
							link.setAttribute('data-path', value);
							
							link.addEventListener('click', function(e) {
									e.preventDefault();
									navigateTo(value, key);
							});
							
							listItem.appendChild(link);
					}
					
					subMenuList.appendChild(listItem);
			}
			
			return subMenuList;
	}
	
	// Function to toggle submenu items
	function toggleItem(key, listItem, data, level) {
			const itemKey = `${key}-${level}`;
			
			// Check if already expanded
			if (state.expandedItems[itemKey]) {
					// Remove the submenu if it exists
					const existingSubmenu = listItem.querySelector('.submenu');
					if (existingSubmenu) {
							listItem.removeChild(existingSubmenu);
					}
					
					// Update state and arrow
					state.expandedItems[itemKey] = false;
					
					// Change icon to closed folder
					listItem.querySelector('.submenu-title').classList.remove('open-folder');
			} else {
					// Build submenu
					const subMenu = buildSubMenu(data, level);
					listItem.appendChild(subMenu);
					
					// Update state and arrow
					state.expandedItems[itemKey] = true;
					
					// Change icon to open folder
					listItem.querySelector('.submenu-title').classList.add('open-folder');
			}
	}
	
	// Function to handle navigation
	function navigateTo(path, title) {
			screenShotElement.src=path;
			
			// You could also update URL without page reload
			history.pushState(null, title, `?path=${path}`);
	}
	
	// Initialize the navigation
	buildNavigation();

	const params = new URLSearchParams(document.location.search);
	const defaultPath = params.get("path") || "/dashboard/census.png";
	screenShotElement.src=defaultPath;
});