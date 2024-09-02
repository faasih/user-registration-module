import { useEffect, useState } from "react";

import { logout } from "../routes/Auth";
import { getLoggedInUserDetails } from "../services/User";

export const useWelcome = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getLoggedInUserDetails(setLoading);
      setUserDetails(response);
    };

    fetchDetails();
    return () => {
      setUserDetails({});
    };
  }, []);

  return {
    loading,
    userDetails,
    handleLogout,
  };
};
