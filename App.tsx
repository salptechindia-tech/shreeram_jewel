import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

/* ======= Website Components ======= */
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

/* ======= Website Pages ======= */
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import CategoryListingPage from './pages/CategoryListingPage';
import SubCategoryListingPage from './pages/SubCategoryListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import VisitUsPage from './pages/VisitUsPage';

/* ======= Admin Pages ======= */
import LoginPage from './pages/LoginPage';
import ProductManagement from './pages/ProductManagement';
import CategoryManagement from './pages/CategoryManagement';
import Layout from './components/Layout';

/* ======= Types & Constants ======= */
import { Product, Category } from './types';
import { INITIAL_PRODUCTS, INITIAL_CATEGORIES } from './constants';

/* ======= Scroll To Top ======= */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  /* ======= Auth State ======= */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* ======= Admin Data State ======= */
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  /* ======= Auth Handlers ======= */
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuth');
  };

  /* ======= Product Handlers ======= */
  const addProduct = (p: Product) => setProducts([p, ...products]);
  const updateProduct = (p: Product) =>
    setProducts(products.map(item => (item.id === p.id ? p : item)));
  const deleteProduct = (id: string) =>
    setProducts(products.filter(p => p.id !== id));

  /* ======= Category Handlers ======= */
  const addCategory = (c: Category) => setCategories([c, ...categories]);
  const updateCategory = (c: Category) =>
    setCategories(categories.map(item => (item.id === c.id ? c : item)));
  const deleteCategory = (id: string) =>
    setCategories(categories.filter(c => c.id !== id));

  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* ======= PUBLIC WEBSITE ROUTES ======= */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/collections" element={<CollectionsPage />} />
                  <Route path="/category/:cat" element={<CategoryListingPage />} />
                  <Route path="/category/:cat/:sub" element={<SubCategoryListingPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/reviews" element={<ReviewsPage />} />
                  <Route path="/visit" element={<VisitUsPage />} />
                </Routes>
              </main>
              <Footer />
              <MobileBottomBar />
            </div>
          }
        />

        {/* ======= ADMIN / AUTH ROUTES ======= */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/admin/products" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/admin/products"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout}>
                <ProductManagement
                  products={products}
                  categories={categories}
                  onAdd={addProduct}
                  onUpdate={updateProduct}
                  onDelete={deleteProduct}
                />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/admin/categories"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout}>
                <CategoryManagement
                  categories={categories}
                  onAdd={addCategory}
                  onUpdate={updateCategory}
                  onDelete={deleteCategory}
                />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ======= FALLBACK ======= */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
