# Cool Dash

## Features

- **Dark/Light Theme Support**: Seamless theme switching with CSS custom properties
- **Interactive Data Visualization**: Charts and graphs using Recharts library
- **Collapsible Sidebars**: Left navigation and right activity panels
- **Responsive Design**: Responsive to different screen sizes
- **Component-Based Architecture**: Reusable, modular React components
- **Routing**: Client-side routing with React Router
- **Modern Build System**: RSBuild for fast development and optimized production builds

## Screens
### Light Theme
<img width="1915" height="971" alt="image" src="https://github.com/user-attachments/assets/c689cec8-51cf-4291-b6bc-62b8956f476d" />
<img width="1915" height="971" alt="image" src="https://github.com/user-attachments/assets/a0d68b03-6394-4f15-98d4-1cbaf51ccef7" />

### Dark Theme
<img width="1915" height="971" alt="image" src="https://github.com/user-attachments/assets/75fb5fe5-1a79-41a6-870c-832a400bc39a" />
<img width="1915" height="971" alt="image" src="https://github.com/user-attachments/assets/e67007b8-c76d-4319-bfea-6828e7116a63" />

## Architecture

### Tech Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router 7.9.1
- **UI Components**: Ant Design 5.27.4
- **Charts**: Recharts 3.2.1
- **Maps**: React Simple Maps 3.0.0
- **Styling**: CSS Modules + CSS Custom Properties
- **Build Tool**: RSBuild 1.5.6
- **Package Manager**: Yarn

### Project Structure

```
src/
├── components/                 # Reusable UI components
│   ├── Breadcrumb/            # Breadcrumb navigation
│   ├── DataCard/              # Metric display cards
│   ├── Input/                 # Form input components
│   ├── LeftSidebar/           # Main navigation sidebar
│   ├── Menu/                  # Menu components
│   ├── Navbar/                # Top navigation bar
│   ├── ProjectionsActualsCard/ # Projections vs actuals chart
│   ├── RevenueByLocationCard/ # Revenue by location map
│   ├── RevenueCard/           # Revenue metrics card
│   ├── RightSidebar/          # Activity and notifications panel
│   ├── Table/                 # Data table component
│   ├── TopSellingProductsCard/ # Top selling products list
│   └── TotalSalesCard/        # Total sales metrics
├── contexts/                  # React Context providers
│   ├── sidebarContext/        # Sidebar state management
│   └── themeContext/          # Theme state management
├── routes/                    # Page routes and layouts
│   └── dashboard/
│       ├── DashboardLayout/   # Main dashboard layout
│       ├── Home/              # Dashboard home page
│       └── OrderList/         # Order management page
├── assets/                    # Static assets
│   └── icons/                 # SVG icon components
├── utils/                     # Utility functions and data
│   └── dummies.js             # Mock data for development
├── App.css                    # Global styles and CSS variables
└── index.jsx                  # Application entry point
```

## Theming System

The application uses CSS custom properties for theming, supporting both light and dark modes:

- **CSS Variables**: Centralized color scheme management
- **Theme Context**: React context for theme state management
- **Dynamic Switching**: Real-time theme changes without page reload
- **Consistent Design**: Unified color palette across all components

## Component Architecture

### Core Components

1. **DashboardLayout**: Main layout wrapper with sidebars and content area
2. **LeftSidebar**: Navigation menu with collapsible sections
3. **RightSidebar**: Activity feed, notifications, and contacts
4. **Navbar**: Top navigation with search and user controls

### Data Visualization Components

1. **DataCard**: Displays key metrics with trend indicators
2. **ProjectionsActualsCard**: Line chart comparing projections vs actuals
3. **RevenueCard**: Revenue metrics with visual indicators
4. **RevenueByLocationCard**: Interactive map showing revenue by location
5. **TopSellingProductsCard**: Table of best-performing products
6. **TotalSalesCard**: Sales summary with charts

### Utility Components

1. **Table**: Reusable data table with sorting and pagination
2. **Input**: Styled form input components
3. **Breadcrumb**: Navigation breadcrumb trail

## Routing Structure

The application uses React Router for client-side navigation:

- `/` - Dashboard home page
- `/:tab` - Dynamic tab-based routing
  - `/home` - Main dashboard
  - `/order-list` - Order management page

## Setup

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

Install the dependencies:

```bash
yarn install
```

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Build the application for production:

```bash
yarn build
```

### Preview Production Build

Preview the production build locally:

```bash
yarn preview
```

## Development Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build production bundle
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint for code quality
- `yarn format` - Format code with Prettier

## Configuration

- **RSBuild**: Modern build tool configuration
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **SVGR**: SVG to React component conversion

## Dependencies

### Core Dependencies

- React & React DOM for UI framework
- React Router for navigation
- Ant Design for UI components
- Recharts for data visualization
- React Simple Maps for geographic data

### Development Dependencies

- RSBuild for building and development
- ESLint for code linting
- Prettier for code formatting
- Various RSBuild plugins for optimization
