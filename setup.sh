#!/bin/bash
# Cosmic Navamsa Guide - Quick Setup Script

echo "🚀 Cosmic Navamsa Guide - Setup Script"
echo "========================================"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not installed. Please install Node.js 18+ first."
    exit 1
fi
echo "✅ Node.js $(node --version) detected"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not installed. Please install npm first."
    exit 1
fi
echo "✅ npm $(npm --version) detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo ""
    echo "📝 Creating .env.local..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your Supabase credentials"
    echo "   - VITE_SUPABASE_URL"
    echo "   - VITE_SUPABASE_ANON_KEY"
    echo "   - LOVABLE_DB_MIGRATION_URL"
else
    echo ""
    echo "✅ .env.local already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Supabase credentials"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:5173"
echo ""
