# Paragon Solutions

Paragon Solutions is a comprehensive enterprise resource planning (ERP) system designed to streamline business operations, enhance productivity, and provide actionable insights through a modern, user-friendly interface.

## 🚀 Features

### 🏢 Company Management
- **Multi-Company Support**: Manage multiple companies from a single dashboard.
- **Branch Management**: Organize operations with hierarchical branch structures.
- **Department & Division Tracking**: Efficiently manage organizational units.

### 👥 User & Role Management
- **Role-Based Access Control (RBAC)**: Secure access with granular permission settings.
- **User Management**: Create, edit, and manage employee accounts.
- **Permission Matrix**: Visual interface for managing user permissions.

### 💰 Financial Management
- **Chart of Accounts**: Flexible and customizable chart of accounts.
- **Voucher System**: Comprehensive voucher management (Sales, Purchase, Journal, Payment, Receipt).
- **Financial Reports**: Generate Trial Balance, Profit & Loss, and Balance Sheet.

### 📦 Inventory Management
- **Product Catalog**: Detailed product information with categories and units.
- **Stock Tracking**: Real-time inventory level monitoring.
- **Stock Adjustments**: Easy stock level adjustments and corrections.

### 👥 CRM & Sales
- **Lead Management**: Track and manage potential customers.
- **Customer Database**: Comprehensive customer information management.
- **Sales Quotations**: Create and manage sales quotations.

### 👥 HR Management
- **Employee Database**: Detailed employee record management.
- **Attendance Tracking**: Monitor employee attendance.
- **Leave Management**: Manage leave applications and approvals.

### 📊 Analytics & Reporting
- **Dashboard**: Real-time business overview with key metrics.
- **Customizable Reports**: Generate reports based on specific business needs.
- **Data Visualization**: Visual representation of business data for better insights.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript

### Backend
- **Framework**: [Django](https://www.djangoproject.com/)
- **Language**: Python 3.12+
- **Database**: MySQL
- **ORM**: Django ORM

## 📂 Project Structure

```
paragon-solutions/
├── backend/              # Django backend application
│   ├── api/              # API endpoints and Django app
│   ├── backend/          # Core Django project settings
│   ├── manage.py         # Django management script
│   └── requirements.txt  # Backend dependencies
│
├── frontend/             # Next.js frontend application
│   ├── app/              # Next.js app router
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── README.md         # Frontend documentation
│
├── .gitignore            # Git ignore files
└── README.md             # Main project documentation
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ and [npm](https://www.npmjs.com/) installed
- [Python](https://www.python.org/) 3.12+ installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paragon-solutions
   ```

### Development

#### Backend Development
The backend is built with Django. Follow these steps to start the development server:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The backend API will be running at [http://localhost:8000](http://localhost:8000).

#### Frontend Development
The frontend is built with Next.js 16.

```bash
cd frontend
npm install
npm run dev
```

The frontend will be accessible at [http://localhost:3000](http://localhost:3000).

## 🔐 Authentication

### Default Credentials
- **Email**: [EMAIL_ADDRESS]
- **Password**: `admin123`

### Login
1. Go to the login page
2. Enter your credentials
3. Click "Login"

## 📊 Usage

### Creating Companies
1. Navigate to **Company Management**
2. Click **Add Company**
3. Fill in company details
4. Click **Save**

### Managing Users
1. Navigate to **User Management**
2. Click **Add User**
3. Fill in user details
4. Assign roles and permissions
5. Click **Save**

### Creating Vouchers
1. Navigate to **Financial Management** > **Vouchers**
2. Select voucher type (Sales, Purchase, Journal, etc.)
3. Fill in voucher details
4. Click **Save**

## 🧪 Testing

### Backend Tests
```bash
cd backend
python manage.py test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Deployment

### Production Deployment
For production deployment, consider using:
- **Backend**: Gunicorn + Nginx or Apache
- **Frontend**: Vercel, Netlify, or Node.js server
- **Database**: Managed MySQL service
- **CI/CD**: GitHub Actions or GitLab CI

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Team

- [Your Name/Team Name]

## 📞 Support

For support, please open an issue on the GitHub repository.

## 🙏 Acknowledgments

- [Django](https://www.djangoproject.com/) - For the powerful backend framework
- [Next.js](https://nextjs.org/) - For the modern frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first styling
- [MySQL](https://www.mysql.com/) - For the robust database
