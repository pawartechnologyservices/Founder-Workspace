import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* You can add header, navigation, etc. here */}
      <main>{children}</main>
      {/* You can add footer here */}
    </div>
  );
};

export default Layout;