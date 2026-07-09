import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";

// Lazy Imports
const Home = lazy(() => import("@/pages/Home"));
const Learn = lazy(() => import("@/pages/Learn"));
const LearnDetail = lazy(() => import("@/pages/LearnDetail"));
const Dictionary = lazy(() => import("@/pages/Dictionary"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const LegalPage = lazy(() => import("@/pages/Legal"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  fontSize: "20px",
                }}
              >
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:slug" element={<LearnDetail />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<LegalPage slug="privacy" />} />
              <Route path="/terms" element={<LegalPage slug="terms" />} />
              <Route
                path="/disclaimer"
                element={<LegalPage slug="disclaimer" />}
              />
              <Route
                path="/cookie-policy"
                element={<CookiePolicy />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>

        <Toaster theme="dark" position="bottom-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;