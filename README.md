<div align="center">
   
# 🚇 Mashhad Metro Station Graph

![Mashhad Metro](https://img.shields.io/badge/Mashhad-Metro-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-0.1.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-ODbL-orange?style=for-the-badge)
![Persian](https://img.shields.io/badge/lang-Persian-red?style=for-the-badge)

**An interactive visualization of Mashhad Metro stations with dark mode support**

[🤝 Contributing](#contributing) • [📊 Data Format](#data-structure) • [🐛 Report Bug](../../issues)

</div>

---

## 📖 About

**Mashhad Metro Station Graph** is an open-source, interactive visualization tool designed to help residents and visitors navigate the Mashhad metro system with ease. Built with modern web technologies, this project provides a beautiful, force-directed graph representation of all metro stations, their connections, and comprehensive facility information.

### Why This Project?

Mashhad, as Iran's second-largest city and a major pilgrimage destination, welcomes millions of visitors annually. The metro system plays a crucial role in urban transportation, especially for pilgrims visiting the Holy Shrine of Imam Reza. However, finding accurate, accessible, and user-friendly information about metro stations has been challenging.

This project aims to solve that by providing:

- 🗺️ **Visual Network Understanding**: See the entire metro network at a glance with an interactive graph
- 📍 **Comprehensive Station Data**: Access detailed information about each station including amenities, addresses, and proximity to landmarks
- 🌐 **Open Data**: All station data is available in a structured JSON format for developers to use in their own projects
- ♿ **Accessibility**: Modern, responsive design that works on all devices
- 🌍 **Community-Driven**: Open-source and accepting contributions from anyone who wants to help

### Who Is This For?

- **🚇 Commuters**: Quick access to station information and facilities
- **🧳 Tourists & Pilgrims**: Easy navigation of the metro system
- **👨‍💻 Developers**: Free, open dataset for building metro-related applications
- **📊 Urban Planners**: Visual representation of the metro network for analysis
- **📱 App Builders**: Ready-to-use data for mobile or web applications

### The Dataset

The heart of this project is the comprehensive `stations.json` dataset, which includes:
- Station names (Persian & English)
- Metro line information with color coding
- Complete addresses
- Available amenities (ATMs, restrooms, food, etc.)
- Station connectivity graph
- Proximity to important landmarks

This dataset is maintained by the community and updated regularly. We encourage everyone to use it, improve it, and build amazing things with it!

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Modern UI/UX**
- Glassmorphism design with blur effects
- Smooth animations and transitions
- Responsive layout for all devices
- RTL support for Persian language

</td>
<td width="50%">

### 🌓 **Dark Mode**
- Toggle between light and dark themes
- Modern slate/navy color palette
- Persistent theme preference
- Smooth theme transitions

</td>
</tr>
<tr>
<td width="50%">

### 🔍 **Smart Search**
- Real-time station search
- Persian text support
- Instant results dropdown
- Click to view station details

</td>
<td width="50%">

### 🗺️ **Interactive Graph**
- Force-directed graph layout
- Multi-line station support
- Color-coded metro lines
- Clickable nodes with details

</td>
</tr>
</table>

### 📍 Station Information

Each station card displays:
- 🚉 **Station Name** (Persian & English)
- 🚇 **Metro Lines** (with color indicators)
- 📍 **Address** (location details)
- 🏪 **Amenities** (WC, ATM, Coffee shops, etc.)
- 🕌 **Proximity to Holy Shrine**

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Live Server, Python HTTP server, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shahriaarrr/mashhad-metro-graph.git
   cd mashhad-metro-graph
   ```

2. **Project structure**
   ```
   mashhad-metro-graph/
   ├── src/
   │   ├── main.html
   │   ├── script.js
   │   └── style.css
   ├── data/
   │   └── stations.json
   ├── font/
   │   └── AradFDVF.woff2
   └── README.md
   ```

3. **Start a local server**
   
   Using Python:
   ```bash
   python -m http.server 5500
   ```
   
   Or use VS Code's Live Server extension

4. **Open in browser**
   ```
   http://127.0.0.1:5500/src/main.html
   ```

---

## 🎯 Usage

### Navigating the Graph

- **🖱️ Click & Drag**: Pan around the metro map
- **🔍 Search**: Type station name in Persian to search
- **📱 Touch**: Full touch support for mobile devices
- **🌙 Theme Toggle**: Click the sun/moon button (top-left)

### Viewing Station Details

1. Click on any station node
2. View comprehensive station information
3. Check available amenities with emoji indicators
4. Close dialog with X button or click elsewhere

### Dark Mode

Toggle between themes by clicking the theme button:
- ☀️ **Light Mode**: Clean white background
- 🌙 **Dark Mode**: Modern slate/navy gradient

Your preference is automatically saved!

---

## 🏗️ Technology Stack

<div align="center">

| Technology | Purpose |
|:----------:|:-------:|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Functionality |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Utility Classes |

</div>

### Libraries

- **[VivaGraphJS](https://github.com/anvaka/VivaGraphJS)** - Force-directed graph rendering
- **[Arad Font](https://github.com/MohamadDarvishi/Arad)** - Beautiful Persian typography
- **Tailwind CSS** - Modern utility-first CSS framework

---

## 📊 Data Structure

### Station Object Format

The `data/stations.json` file contains all metro station information in the following format:

```json
{
  "station_name": {
    "name": "Station Name (English)",
    "translations": {
      "fa": "نام ایستگاه (فارسی)"
    },
    "lines": [1, 2],
    "colors": ["#0EA5E9", "#10B981"],
    "address": "Full address in Persian",
    "relations": ["connected_station_1", "connected_station_2"],
    "wc": true,
    "coffeeShop": true,
    "groceryStore": true,
    "fastFood": true,
    "atm": true,
    "elevator": true,
    "bicycleParking": true,
    "NearHolyshrine": true,
    "cleanFood": true,
    "blindPath": true,
    "fireSuppressionSystem": true,
    "fireExtinguisher": true,
    "metroPolice": true,
    "creditTicketSales": false,
    "waitingChair": true,
    "camera": true,
    "trashCan": true,
    "smoking": false,
    "petsAllowed": false,
    "freeWifi": false,
    "prayerRoom": true,
  }
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | English name of the station |
| `translations.fa` | string | Persian name of the station |
| `lines` | array | List of line numbers (e.g., [1, 2]) |
| `colors` | array | Hex codes for the corresponding lines |
| `address` | string | Full location details in Persian |
| `relations` | array | IDs of adjacent connected stations |
| `wc` | boolean | Public restroom availability |
| `atm` | boolean | ATM machine availability |
| `fastFood` / `coffeeShop` | boolean | Food and beverage services |
| `groceryStore` | boolean | Access to snacks/grocery |
| `elevator` / `blindPath` | boolean | Accessibility features for disabled citizens |
| `bicycleParking` | boolean | Bike storage facilities |
| `NearHolyshrine` | boolean | Proximity to the Holy Shrine of Imam Reza |
| `metroPolice` | boolean | Presence of a police station/kiosk |
| `prayerRoom` | boolean | Availability of Musalla (Prayer room) |
| `waitingChair` / `trashCan`| boolean | General station amenities |

### Adding New Stations

1. Open `data/stations.json`
2. Add your station object with all required fields
3. Include connections in the `relations` array
4. Update colors to match metro line standards
5. Test the graph to ensure proper rendering

---

## 🎨 Projects Using This Dataset

We love seeing what the community builds with this data! Here are some awesome projects:

| Project | Description | Repository | Author |
|---------|-------------|------------|--------|
| *Mashhad Metro mobile app* | *Complete guide for Mashhad Metro navigation* | [Link](https://github.com/shahriaarrr/mashhad-metro) | [@shahriaarrr](https://github.com/shahriaarrr) |

> **📣 Used this dataset in your project?** 
> 
> We'd love to feature it here! Open an issue or submit a PR with:
> - Project name and brief description
> - Link to your repository
> - Your GitHub username
> 
> We'll add your project to this list and help promote it to the community! 🚀

---

## 🤝 Contribute

We welcome contributions to improve Mashhad's open transport data!

1. **Improve Data**: Update `stations.json` with missing facilities or new connections.
2. **Report Bugs**: Open an issue if you find any UI/UX glitches or data inaccuracies.
3. **Submit PRs**: 
   - Fork the repo and create a feature branch.
   - Ensure your JSON syntax is valid.
   - Submit a Pull Request with a clear description of changes.

---

## 💖 Credits & Inspiration

This project was inspired by the **[tehran-metro-data](https://github.com/mostafa-kheibary/tehran-metro-data)** project.  
Special thanks to **[Mostafa Kheibary](https://github.com/mostafa-kheibary)** for his valuable guidance and for paving the way in providing open data for Iran's metro systems.

---

## 📄 License

This project is licensed under the **Open Database License (ODbL) v1.0**.

### What does this mean?

This project is licensed under the Open Database License (ODbL) v1.0. Use it freely, but keep it open and give credit! 🌟

For complete license terms and legal details, please see the [LICENSE](LICENSE) file.

---

## 📞 Contact & Support

<div align="center">

**Love this project? Give it a ⭐️!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/mashhad-metro-graph?style=social)](../../stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/mashhad-metro-graph?style=social)](../../network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/yourusername/mashhad-metro-graph?style=social)](../../watchers)

[🐛 Issues](../../issues) • [💡 Discussions](../../discussions) • [📧 Contact](shahriaarrr@gmail.com)

</div>

---

<div align="center">

**Made with ❤️ for the people of Mashhad**

*Helping citizens navigate the metro system with ease*

</div>
