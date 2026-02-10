import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import ActiveOrders from "./pages/ActiveOrders";
import OrderHistory from "./pages/OrderHistory";
import OrderDetails from "./pages/OrderDetails";
import Profile from "./pages/Profile";
import ManageAddresses from "./pages/ManageAddresses";
import Favorites from "./pages/Favorites";
import WriteReview from "./pages/WriteReview";
import SearchResults from "./pages/SearchResults";
import HelpSupport from "./pages/HelpSupport";
import About from "./pages/About";
import TrackOrder from "./pages/TrackOrder";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import PublicRoute from "./components/common/PublicRoute";
import ProtectedRoute from "./components/common/ProtectedRoute";

const App = () => (  
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicRoute/>}>
                <Route path="/" element={<Index />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
              </Route>

              {/* Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={['CUSTOMER']}/>}>
                <Route path="/reset-password" element={<ResetPassword />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/restaurant/:id" element={<RestaurantDetail />} />
                <Route path="/restaurant/:id/review" element={<WriteReview />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order/success/:orderId" element={<OrderSuccess />} />
                <Route path="/order/:orderId" element={<OrderDetails />} />
                <Route path="/orders/active" element={<ActiveOrders />} />
                <Route path="/orders/history" element={<OrderHistory />} />
                <Route path="/track/:orderId" element={<TrackOrder />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/addresses" element={<ManageAddresses />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<HelpSupport />} />
                <Route path="/about" element={<About />} />
              </Route>

              {/* Not Found Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
);

export default App;