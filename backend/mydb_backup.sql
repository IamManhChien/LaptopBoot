-- Tắt các timeout không cần thiết
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;

-- Cấu hình client
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Tạo bảng người dùng
CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tạo bảng sản phẩm
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT,
    price VARCHAR(50),
    description TEXT,
    stock INTEGER NOT NULL DEFAULT 0,
    product_type TEXT NOT NULL
);

-- Tạo bảng đơn hàng
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(username),
    status TEXT NOT NULL DEFAULT 'pending',
    total_price BIGINT NOT NULL DEFAULT 0,
    payment_method TEXT,
    payment_status TEXT NOT NULL DEFAULT 'pending',
    shipping_address TEXT,
    note TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tạo bảng chi tiết đơn hàng
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price BIGINT NOT NULL CHECK (price >= 0)
);