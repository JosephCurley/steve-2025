// Destructure components from global scope
const { BrowserRouter, Routes, Route } = ReactRouterDOM;
// Placeholder component for routes
const PageContent = () => (
  <div className="page-content">
    <h1>Page Content</h1>
    <p>Select a navigation item to view its content.</p>
  </div>
);
// App component
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main className="content-area">
          <Routes>
            <Route path="*" element={<PageContent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};