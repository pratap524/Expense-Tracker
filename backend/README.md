# Expense Tracker Backend (Flask + SQL)

## Quick Start

1. Create and activate a Python 3.11 virtual environment.
2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Copy environment variables:

   ```bash
   copy .env.example .env
   ```

4. Start services:

   ```bash
   flask run
   ```

## API

- Base URL: `/api/v1`
- Health: `GET /api/v1/health`

## Database

- SQLAlchemy models include:
  - `Role`
  - `User`
  - `RefreshToken`
- Uses UUID primary keys and timestamp columns.
- Includes soft-delete support on `User`.
